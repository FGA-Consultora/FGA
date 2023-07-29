import { useState } from "react"

export const Carrousel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hide, setHide] = useState("")

  const clickHandler = () => {
    setIsOpen(!isOpen)
    if (isOpen === true) {
      document.body.style.overflow = "overlay"
    } else {
      document.body.style.overflow = "hidden"
    }

    // I'm still testing this part:
    setTimeout(() => {
      setHide("z-n1")
    }, 1000)
  }

  const fullPage = isOpen ? "fixed h-screen w-full z-20" : hide
  return (
    <>
      <label
        htmlFor="my-drawer"
        className="btn btn-primary fixed drawer-button z-30 top-0 right-0"
        onClick={clickHandler}>
        open menu
      </label>

      <div className={`drawer fixed h-screen w-full ${fullPage} `}>
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked={isOpen}
        />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay"
            onClick={clickHandler}></label>
          <ul className="p-6 overflow-y-auto w-80 bg-base-100 flex-col scroll_custom scroll_black">
            <li>
              <a href="#section-projects" className="btn w-full mb-5">
                Projects
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-blog-posts"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Blog<span className="hidden sm:inline sm:ml-2">Posts</span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-about"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                About
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-contact"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Contact
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-blog-posts"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Blog<span className="hidden sm:inline sm:ml-2">Posts</span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-about"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                About
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-contact"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Contact
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-blog-posts"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Blog<span className="hidden sm:inline sm:ml-2">Posts</span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-about"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                About
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-contact"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Contact
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-blog-posts"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Blog<span className="hidden sm:inline sm:ml-2">Posts</span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-about"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                About
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-contact"
                className="btn w-full mb-5"
                onClick={clickHandler}>
                Contact
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Carrousel
