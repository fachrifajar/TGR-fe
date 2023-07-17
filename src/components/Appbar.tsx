import ButtonTemplate from "./template/Button";

const Appbar = () => {
  return (
    <>
      <header>
        <div className="mx-auto px-5 md:px-10 py-5">
          <div className="flex justify-between items-center h-14">
            <img src="/logo-dark.png" alt="logo" className="w-20" />
            <div>
              <ButtonTemplate text={"Login"} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Appbar;
