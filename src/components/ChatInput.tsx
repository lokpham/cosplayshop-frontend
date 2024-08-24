import { ChangeEvent, useState } from "react";
import Button from "src/components/Button";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const maxWords = 500;

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).length;
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (countWords(value) <= maxWords) {
      setMessage(value);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Nhập bình luận (tối đa 1000 từ)"
          rows={2}
          className="max-h-[200px] min-h-[40px] outline-none border-2 border-secondary-300 w-full max-w-[1000px] p-2"
        />
        <Button>Gửi</Button>
      </div>
      <div>
        <p>
          {countWords(message)}/{maxWords} từ
        </p>
      </div>
    </div>
  );
};

export default ChatInput;
