import CustomPlayer from "./CustomPlayer";
import CustomSideBar from "./CustomSideBar";
import CustomIndexMain from "./CustomIndexMain";

const CustomIndex = () => {
  return (
    <>
      <div className="d-flex">
        <CustomSideBar />
        <CustomIndexMain />
      </div>

      <CustomPlayer />
    </>
  );
};

export default CustomIndex;
