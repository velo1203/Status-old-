import { IoIosSettings } from "react-icons/io";
import style from "./statusSection.module.css";
import Link from "next/link";

function StatusSection() {
    return (
        <div className={style.Main}>
            <h1>활동 상태</h1>
            <div className={style.Status}></div>
            <button className="button">활동 변경</button>
        </div>
    );
}

export { StatusSection };
