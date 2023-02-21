const openMenu = () => {
  var element = document.getElementById("mobile-btn");
  element.classList.toggle("open");
}

export default function Mobile_Menu() {
  return (
    <div className="mobile-menu bg_white pc_box_shadow">
      <div id="mobile-btn">
        <div id="nav-icon" className="btn-spans nav-icon" onclick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}