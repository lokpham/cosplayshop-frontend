import { useAtomValue } from "jotai";
import { authentication_atom } from "src/atoms/myAtom";
import Button from "src/components/Button";
import UserAccount from "src/components/UserAccount";

const AuthHeader = () => {
  const user = useAtomValue(authentication_atom);

  return (
    <>
      {user && user.isLogged ? (
        <UserAccount data={user.user} />
      ) : (
        <Button type_button="link" href="login">
          ĐĂNG NHẬP
        </Button>
      )}
    </>
  );
};

export default AuthHeader;
