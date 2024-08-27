import { useAtomValue } from "jotai";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authentication_atom } from "src/atoms/myAtom";
import Button from "src/components/Button";

const CommentInput = () => {
  const [message, setMessage] = useState("");
  const maxWords = 500;
  const authentication = useAtomValue(authentication_atom);
  const navigate = useNavigate();
  const countWords = (text: string) => {
    return text.trim().split(/\s+/).length;
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (countWords(value) <= maxWords) {
      setMessage(value);
    }
  };
  const handleSendComment = () => {
    if (authentication.user == null) {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <textarea
          value={message}
          onChange={handleChange}
          placeholder={`Nhập bình luận (tối đa ${maxWords} từ)`}
          rows={2}
          className="max-h-[200px] min-h-[40px] outline-none border-2 border-secondary-300 w-full max-w-[1000px] p-2"
        />
        <Button onClick={handleSendComment}>Gửi</Button>
      </div>
      <div>
        <p>
          {countWords(message)}/{maxWords} từ
        </p>
      </div>
    </div>
  );
};

export default CommentInput;
