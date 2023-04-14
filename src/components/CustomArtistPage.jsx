import CustomPlayer from "./CustomPlayer";
import CustomSideBar from "./CustomSideBar";
import CustomArtistPageMain from "./CustomArtistPageMain";

const CustomArtistPage = () => {
  return (
    <>
      <div className="d-flex">
        <CustomSideBar />
        <CustomArtistPageMain />
      </div>

      <CustomPlayer />
    </>
  );
};

export default CustomArtistPage;
