const First = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto py-20">
        <h2 className="text-3xl font-bold text-center">
          Designed for the furture
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 md:-mt-10 gap-y-20">
          <div className="md:hidden block mt-10">
            <img src="/images/illustration-editor-mobile.svg" alt="" />
          </div>
          <div className="md:pl-56 md:flex md:items-end px-10 md:text-left text-center">
            <div>
              <h2 className="font-bold text-3xl md:text-2xl">
                Introducing an extensible editor
              </h2>
              <p className="mt-2">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
          </div>
          <div className="row-span-2 overflow-hidden -mr-64 md:block hidden">
            <img src="/images/illustration-editor-desktop.svg" alt="" />
          </div>
          <div className="md:pl-56 px-10 md:flex md:text-left text-center">
            <div>
              <h2 className="font-bold text-3xl md:text-2xl">
                Robust content management
              </h2>
              <p className="mt-2">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ddb round-bl round-tr relative md:static mt-60 md:mt-0 md:py-0 py-20">
        <div className="w-5/6 mx-auto grid md:grid-cols-2 grid-cols-1 h-96">
          <div className="col-span-1 md:relative">
            <img
              src="/images/illustration-phones.svg"
              className="absolute md:top-1/2 md:-translate-y-1/2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
          </div>
          <div className="col-span-1 flex items-center justify-center md:mt-0 mt-32">
            <div>
              <h2 className="text-4xl text-white font-bold">
                State of the Art Infrastructure
              </h2>
              <p className="text-white mt-4">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:pr-16 md:mt-20">
        <div className="row-span-2 md:-ml-64 my-10">
          <img
            src="/images/illustration-laptop-desktop.svg"
            className="md:block hidden"
            alt=""
          />
          <img
            src="/images/illustration-laptop-mobile.svg"
            className="md:hidden block"
            alt=""
          />
        </div>
        <div className="flex items-end text-center md:text-left px-10 md:px-0">
          <div className="pb-10">
            <h2 className="font-bold text-3xl md:text-2xl">
              Free, open, simple
            </h2>
            <p className="mt-2">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
        </div>
        <div className="pt-10 text-center md:text-left px-10 md:px-0">
          <h2 className="font-bold text-3xl md:text-2xl">Powerful tooling</h2>
          <p className="mt-2">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
      <div className="round-tr bg-fbg md:mt-0 mt-10">
        <div className="round-tr grid md:grid-cols-4  grid-cols-1 p-10 text-footer gap-y-10">
          <div className="col-span-1 text-center">
            <h2 className="text-3xl font-bold text-white">Blogr</h2>
          </div>
          <div className="col-span-1 leading-9 md:text-left text-center">
            <p className="text-white">Product</p>
            <ul className="list-none mt-3">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integration</li>
            </ul>
          </div>
          <div className="col-span-1 leading-9 md:text-left text-center">
            <p className="text-white">Company</p>
            <ul className="list-none mt-3">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-span-1 leading-9 md:text-left text-center">
            <p className="text-white">Connect</p>
            <ul className="list-none mt-3">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-footer">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/bhonePyae99">Bhone Pyae Kyaw</a>.
        </div>
      </div>
    </section>
  );
};

export default First;
