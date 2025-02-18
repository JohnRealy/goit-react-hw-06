import { HiOutlineUser, HiOutlinePhone } from "react-icons/hi";
import css from "./Contact.module.css";

export default function Contact({ handleRemove, user }) {
  return (
    <>
      <div className={css.listInfo}>
        <div className={css.listWrap}>
          <HiOutlineUser />
          <p>{user.name}</p>
        </div>
        <div className={css.listWrap}>
          <HiOutlinePhone />
          <p>{user.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => handleRemove(user.id)}
      >
        Delete
      </button>
    </>
  );
}
