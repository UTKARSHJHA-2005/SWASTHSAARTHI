// The AI Chatbot page where user tells his/her symptoms.
import axios from "axios"; // Axios 
import { useState, useRef, useEffect } from "react";
import { Send, Loader2, Image } from "lucide-react"; // Icons

function Chat() {
  const [message, setMessage] = useState(""); // User Input
  const [chatHistory, setChatHistory] = useState([]); // Chat History
  const [loading, setLoading] = useState(false); // Loading
  const [image, setImage] = useState(null); // Image
  const fileInputRef = useRef(null); // File Input Reference
  const chatContainerRef = useRef(null); // Chat Container Reference

  // Scroll to bottom on new message
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory, loading]);

  const handleImageClick = () => fileInputRef.current.click();

  // Function to image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) setImage(file);
  };

  // Function to send image
  const handleSendImage = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    // API for image classification
    try {
      const res = await axios.post("http://localhost:10000/predict/image", formData);
      const predictedDisease = res.data?.predicted_disease || "No prediction available.";
      // Shows the response from API
      setChatHistory((prev) => [
        ...prev,
        { type: "user", content: "[Image uploaded]", image: URL.createObjectURL(image) },
        { type: "bot", content: predictedDisease },
      ]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { type: "error", content: "Error processing your image. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setImage(null);
    }
  };

  // Function to send message
  const handleSend = async () => {
    if (!message.trim() && !image) return;
    if (image) {
      handleSendImage();
      return;
    }
    setChatHistory((prev) => [...prev, { type: "user", content: message }]);
    setLoading(true);
    const userMessage = message;
    setMessage("");
    // API for text classification
    try {
      const res = await axios.post(
        "http://localhost:10000/chat/",
        { user_input: userMessage, user_id: "test_user_123" }
      );
      // Shows the response from API
      const responseData = res.data;
      const formattedResponse = `
🩺 Disease: ${responseData.disease}
📜 Description: ${responseData.description}
⚠️ Severity: ${responseData.severity}
✅ Precautions: ${responseData.precautions.join(", ")}
🚨 Urgency: ${responseData.urgency}
`;
      setChatHistory((prev) => [...prev, { type: "bot", content: formattedResponse }]);
    } catch {
      setChatHistory((prev) => [
        ...prev,
        { type: "error", content: "Error processing your request. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      {/* Header */}
      <div className="bg-white shadow-lg p-5 text-center border-b sticky top-0 z-10">
        <h1 className="text-2xl font-extrabold text-blue-600">AI Medical Assistant</h1>
        <p className="text-gray-500 text-sm">Your health, powered by AI diagnosis</p>
      </div>
      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={chatContainerRef}>
        {chatHistory.length === 0 && (
          <div className="text-center p-4 bg-blue-100 rounded-lg">
            <p className="text-blue-700">Welcome! Describe your symptoms or upload an image to begin.</p>
          </div>
        )}
        {/* Chat Messages */}
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-xl p-4 max-w-[70%] shadow-md ${msg.type === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : msg.type === "error"
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}>
              {msg.image && (
                <img src={msg.image} alt="Uploaded" className="rounded-lg mb-2 w-48 h-48 object-cover border"/>
              )}
              <pre className="whitespace-pre-wrap break-words">{msg.content}</pre>
            </div>
          </div>
        ))}
        {/* Loader */}
        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-gray-200 text-gray-600 p-3 rounded-lg shadow">
              <Loader2 className="animate-spin" size={18} />
              Processing...
            </div>
          </div>
        )}
      </div>
      {/* Input Section */}
      <div className="bg-white p-4 shadow-inner border-t sticky bottom-0">
        <div className="flex items-center space-x-2">
          <textarea rows={1} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe your symptoms..."
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"/>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden"/>
          <button onClick={handleImageClick} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" title="Upload Image">
            <Image size={20} />
          </button>
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              className="h-10 w-10 object-cover rounded-lg border"
            />
          )}
          <button onClick={handleSend} disabled={loading || (!message.trim() && !image)}
          className={`p-3 rounded-lg text-white transition ${loading || (!message.trim() && !image)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
              }`}>
            <Send size={20} />
          </button>
        </div>
        <p className="text-gray-400 text-xs mt-1">Press Enter to send.</p>
      </div>
    </div>
  );
}

export default Chat;
