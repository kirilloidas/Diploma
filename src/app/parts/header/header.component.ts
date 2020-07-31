import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // створюємо подію на прикріплення шапки до верху екрана
    let pageHeader: HTMLElement = document.getElementById("pageHeader");
    let direction: "up" | "down" = "up";

    document.addEventListener("scroll", () => {
      if (window.innerHeight <= pageYOffset && direction == "up") {
        this.animateHeader(pageHeader, direction);
        direction = "down";
      }
      if (window.innerHeight > pageYOffset && direction == "down") {
        this.animateHeader(pageHeader, direction);
        direction = "up";
      }
    });

  }

  // Відкриття додаткового меню
  showMenu(subMainNavLink: HTMLLinkElement, subMainNavIcon: SVGElement, subMainNavList: HTMLUListElement): boolean {
    subMainNavLink.classList.toggle('main-nav__link_active');
    subMainNavIcon.classList.toggle('sub-main-nav__icon_active');
    subMainNavList.classList.toggle('sub-main-nav__list_active');

    return false;
  }

  // Анімація шапки
  animateHeader(pageHeader: HTMLElement, direction: "up" | "down"): void {

    if (direction == "up") {
      pageHeader.animate([
        {
          position: "fixed",
          top: "-100px",
          background: "url(../../assets/img/header_menu_bg_1.jpg)"
        },
        {
          position: "fixed",
          top: 0,
          background: "url(../../assets/img/header_menu_bg_1.jpg)"
        }
      ], {
        duration: 200,
        delay: 200,
        easing: "ease-out",
        fill: "forwards"
      });
    }

    if (direction == "down") {
      pageHeader.animate([
        {
          position: "fixed",
          top: 0
        },
        {
          position: "fixed",
          top: "-100px"
        }
      ], {
        duration: 200,
        easing: "ease-out",
        fill: "forwards"
      });
      pageHeader.animate([
        {
          position: "absolute",
          top: 0,
          background: "none"
        }
      ], {
        duration: 100,
        delay: 100,
        easing: "ease-out",
        fill: "forwards"
      });
    }
  }

}
