import { IoIosSettings } from "react-icons/io";
import style from "./header.module.css";
import Link from "next/link";

function Header() {
    return (
        <header className={style.header}>
            <div className={style.LogoSection}>
                <Link href="/" className={style.Logo}>
                    Status
                </Link>
                <p>학급 자습시간 학생 관리 웹</p>
            </div>
            <div className={style.SettingSection}>
                <Link href="/setting" className={style.Setting}>
                    설정
                </Link>
                <IoIosSettings />
            </div>
        </header>
    );
}

export { Header };
