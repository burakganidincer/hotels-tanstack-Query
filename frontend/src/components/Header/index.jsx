import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <Container designs="flex justify-between p-5">
        <div className="flex gap-10">
          <Link to="/">
            <h1 className="font-bold text-xl hover:cursor-pointer">
              MjölbyFind
            </h1>
          </Link>

          <nav className="flex gap-5 items-center">
            <Link to="/">Oteller</Link>
            <Link className="max-md:hidden" to="/">
              Popüler
            </Link>
            <Link to="/admin/create">Oluştur</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
