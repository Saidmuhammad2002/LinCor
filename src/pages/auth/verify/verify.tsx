import "./_verify.scss";

export const Verify = () => {
  return (
    <div className="login">
      <h3 className="login__logo">LinCor</h3>
      <h2 className="login__heading">Tasdiqlash</h2>
      <p className="login__advice">
        Shu raqamga yuborilgan maxfiy kodni kiriting.
      </p>

      <form className="login__form">
        <label className="login__label">
          Kodni kiriting
          <input type="text" className="login__controls" />
          <button>Kodni qayta yuborish</button>
        </label>
      </form>
    </div>
  );
};
