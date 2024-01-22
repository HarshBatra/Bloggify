const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 justify-between items-center md:items-start text-center md:text-left text-sm md:text-md py-8 ">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <div className="py-4 pb-6 flex md:flex-row flex-col justify-center gap-4 text-center text-white bg-black text-sm">
        <div>All rights reserved @Bloggify {year}</div>
        <div> | </div>
        <div>
          This project is made by:{" "}
          <a href="https://github.com/HarshBatra">
            <span className="font-bold">Harsh Batra</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
