

 function ScrollTopButton() {
  return (
    <div>
      <button
  className="scroll-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  ^ Top
</button>
    </div>
  )
}
export default ScrollTopButton
