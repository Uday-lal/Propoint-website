const accordian_items = document.getElementsByClassName("accordian-item");

class AnimateAccordian {
  constructor(accordian_item) {
    const accordian_child_nodes = accordian_item.children;
    this.accordian_head = accordian_child_nodes[0];
    this.accordian_body = accordian_child_nodes[1];
    this.expand_icon = this.accordian_head.children[1];
  }

  animate() {
    if (this.expand_icon.className === "accordian-collapse") {
      this.expansion_animate();
    } else {
      this.collapsing_animate();
    }
  }

  expansion_animate() {
    this.expand_icon.className = "accordian-expand";
    this.accordian_body.className = "accordian-body-show";
    const total_height = this.accordian_body.clientHeight;
    this.accordian_body.className = "accordian-body-sliding";
    const accordian_body = this.accordian_body;
    const interval_id = setInterval(sliding, 0.2);
    let current_height = 0;
    function sliding() {
      if (current_height > total_height) {
        accordian_body.style.height = total_height + "px";
        accordian_body.className = "accordian-body-show";
        clearInterval(interval_id);
      } else {
        current_height += 2;
        accordian_body.style.overflow = "hidden";
        accordian_body.style.height = current_height + "px";
        current_height = current_height;
      }
    }
  }

  collapsing_animate() {
    this.expand_icon.className = "accordian-collapse";
    this.accordian_body.className = "accordian-body";

    const total_height = 0;
    this.accordian_body.className = "accordian-body-sliding";
    const accordian_body = this.accordian_body;
    const interval_id = setInterval(sliding, 0.2);
    let current_height = this.accordian_body.clientHeight;
    function sliding() {
      if (current_height < total_height) {
        accordian_body.className = "accordian-body";
        accordian_body.style.height = null;
        accordian_body.style.overflow = null;
        clearInterval(interval_id);
      } else {
        current_height -= 2;
        accordian_body.style.overflow = "hidden";
        accordian_body.style.height = current_height + "px";
        current_height = current_height;
      }
    }
  }
}

for (const accordian_item of accordian_items) {
  const accordian_head = accordian_item.children[0];
  accordian_head.addEventListener("click", () => {
    const animateAccordian = new AnimateAccordian(accordian_item);
    animateAccordian.animate();
  });
}
