import { HiOutlineLogout } from "react-icons/hi";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogut";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {!isPending ? <HiOutlineLogout /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
