const navbar=()=>{var n=window.location.pathname.includes("index"),n=`
        <a href="${n?"":"../"}index.html" class="navbar__links-container__logo"><span class="navbar__logo">The Green<br>Trees Initiative</span></a>
        <ul class="navbar__links-container">
            <li><a href="https://github.com/gigachadteam/Very-Green-WebProject" class="navbar__links-container__link">Github</a></li>
            <li><a href="${n?"./pages/":""}about-us.html" class="navbar__links-container__link">About us</a></li>
            <li><a href="${n?"./pages/":""}payment-first-stage.html" class="navbar__links-container__link navbar__links-container__link--primary">Donate now</a></li>
        </ul>
    `,a=document.createElement("nav");a.innerHTML=n,a.classList.add("navbar"),document.body.prepend(a)},footer=()=>{var n=document.createElement("footer");n.innerHTML=`
        <h1 class="h1--blue h1--small">
            The&nbspGreen Tree&nbspInitiative
        </h1>
        <div class="footer__content-container">
            <div class="footer__content-container__content">
                <div class="footer__content-container__content__heading">Contact Us</div>
                <hr>
                <div>
                    123 Anywhere St.<br> cityname,&nbspNY&nbsp11296<br>(123)456-7890 contact@npo.org
                </div>
            </div>
            <div class="footer__content-container__content">
                <div class="footer__content-container__content__heading">Links</div>
                <hr>
                <div>
                    <a href="" class="a--nostyling">The&nbspissue</a>
                    <br>
                    <a href="" class="a--nostyling">How&nbspwe&nbsphelp</a>
                    <br>
                    <a href="" class="a--nostyling">Get&nbspInvolved</a>
                    <br>
                    <a href="" class="a--nostyling">Latest&nbspnews</a>
                </div>
            </div>
            <div class="footer__content-container__content">
                <div class="footer__content-container__content__heading">Follow us</div>
                <hr>
                    <div>
                        <a href="" class="a--nostyling">Facebook</a>
                        <br>
                        <a href="" class="a--nostyling">Twitter</a>
                        <br>
                        <a href="" class="a--nostyling">Instagram</a>
                        <br>
                        <a href="" class="a--nostyling">Medium</a>
                    </div>
                </hr>
            </div>
        </div>
        <div>
            <p class="stylized-text stylized-text--blue stylized-text--md">
                #STOP CLIMATE CHANGE
            </p>
        </div>
    `,n.classList.add("footer"),document.body.append(n)},layout=()=>{navbar(),footer()};export{layout};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMvbGF5b3V0LmpzIiwic291cmNlcyI6WyJ1dGlscy9sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGluZGV4UGFnZSA9IGN1cnJlbnRQYWdlLmluY2x1ZGVzKFwiaW5kZXhcIilcblxuICAgIGNvbnN0IEhUTUwgPSBgXG4gICAgICAgIDxhIGhyZWY9XCIke2luZGV4UGFnZSA/IFwiXCIgOiBcIi4uL1wifWluZGV4Lmh0bWxcIiBjbGFzcz1cIm5hdmJhcl9fbGlua3MtY29udGFpbmVyX19sb2dvXCI+PHNwYW4gY2xhc3M9XCJuYXZiYXJfX2xvZ29cIj5UaGUgR3JlZW48YnI+VHJlZXMgSW5pdGlhdGl2ZTwvc3Bhbj48L2E+XG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhcl9fbGlua3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9naWdhY2hhZHRlYW0vVmVyeS1HcmVlbi1XZWJQcm9qZWN0XCIgY2xhc3M9XCJuYXZiYXJfX2xpbmtzLWNvbnRhaW5lcl9fbGlua1wiPkdpdGh1YjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIke2luZGV4UGFnZSA/IFwiLi9wYWdlcy9cIiA6IFwiXCJ9YWJvdXQtdXMuaHRtbFwiIGNsYXNzPVwibmF2YmFyX19saW5rcy1jb250YWluZXJfX2xpbmtcIj5BYm91dCB1czwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIke2luZGV4UGFnZSA/IFwiLi9wYWdlcy9cIiA6IFwiXCJ9cGF5bWVudC1maXJzdC1zdGFnZS5odG1sXCIgY2xhc3M9XCJuYXZiYXJfX2xpbmtzLWNvbnRhaW5lcl9fbGluayBuYXZiYXJfX2xpbmtzLWNvbnRhaW5lcl9fbGluay0tcHJpbWFyeVwiPkRvbmF0ZSBub3c8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICBgO1xuXG4gICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIHRlbXBDb250YWluZXIuaW5uZXJIVE1MID0gSFRNTDtcbiAgICB0ZW1wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG5cbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQodGVtcENvbnRhaW5lcilcbn07XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBIVE1MID0gYFxuICAgICAgICA8aDEgY2xhc3M9XCJoMS0tYmx1ZSBoMS0tc21hbGxcIj5cbiAgICAgICAgICAgIFRoZSZuYnNwR3JlZW4gVHJlZSZuYnNwSW5pdGlhdGl2ZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fY29udGVudC1jb250YWluZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb250ZW50LWNvbnRhaW5lcl9fY29udGVudF9faGVhZGluZ1wiPkNvbnRhY3QgVXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgMTIzIEFueXdoZXJlIFN0Ljxicj4gY2l0eW5hbWUsJm5ic3BOWSZuYnNwMTEyOTY8YnI+KDEyMyk0NTYtNzg5MCBjb250YWN0QG5wby5vcmdcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fY29udGVudC1jb250YWluZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb250ZW50LWNvbnRhaW5lcl9fY29udGVudF9faGVhZGluZ1wiPkxpbmtzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImEtLW5vc3R5bGluZ1wiPlRoZSZuYnNwaXNzdWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiYS0tbm9zdHlsaW5nXCI+SG93Jm5ic3B3ZSZuYnNwaGVscDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJhLS1ub3N0eWxpbmdcIj5HZXQmbmJzcEludm9sdmVkPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImEtLW5vc3R5bGluZ1wiPkxhdGVzdCZuYnNwbmV3czwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fY29udGVudC1jb250YWluZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb250ZW50LWNvbnRhaW5lcl9fY29udGVudF9faGVhZGluZ1wiPkZvbGxvdyB1czwvZGl2PlxuICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImEtLW5vc3R5bGluZ1wiPkZhY2Vib29rPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiYS0tbm9zdHlsaW5nXCI+VHdpdHRlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImEtLW5vc3R5bGluZ1wiPkluc3RhZ3JhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImEtLW5vc3R5bGluZ1wiPk1lZGl1bTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9ocj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3R5bGl6ZWQtdGV4dCBzdHlsaXplZC10ZXh0LS1ibHVlIHN0eWxpemVkLXRleHQtLW1kXCI+XG4gICAgICAgICAgICAgICAgI1NUT1AgQ0xJTUFURSBDSEFOR0VcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICB0ZW1wQ29udGFpbmVyLmlubmVySFRNTCA9IEhUTUw7XG4gICAgdGVtcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGVtcENvbnRhaW5lcilcbn1cblxuZXhwb3J0IGNvbnN0IGxheW91dCA9ICgpID0+IHtcbiAgICBuYXZiYXIoKVxuICAgIGZvb3RlcigpXG59Il0sIm5hbWVzIjpbIm5hdmJhciIsImluZGV4UGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsIkhUTUwiLCJ0ZW1wQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInByZXBlbmQiLCJmb290ZXIiLCJhcHBlbmQiLCJsYXlvdXQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQVMsS0FDWCxJQUNNQyxFQURjQyxPQUFPQyxTQUFTQyxTQUNOQyxTQUFTLE9BQU8sRUFFeENDO21CQUNTTCxFQUFZLEdBQUs7OzsyQkFHVEEsRUFBWSxXQUFhOzJCQUN6QkEsRUFBWSxXQUFhOztNQUkxQ00sRUFBZ0JDLFNBQVNDLGNBQWMsS0FBSyxFQUNsREYsRUFBY0csVUFBWUosRUFDMUJDLEVBQWNJLFVBQVVDLElBQUksUUFBUSxFQUVwQ0osU0FBU0ssS0FBS0MsUUFBUVAsQ0FBYSxDQUN2QyxFQUVNUSxPQUFTLEtBQ1gsSUErQ01SLEVBQWdCQyxTQUFTQyxjQUFjLFFBQVEsRUFDckRGLEVBQWNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFDZEgsRUFBY0ksVUFBVUMsSUFBSSxRQUFRLEVBRXBDSixTQUFTSyxLQUFLRyxPQUFPVCxDQUFhLENBQ3RDLEVBRWFVLE9BQVMsS0FDbEJqQixPQUFPLEVBQ1BlLE9BQU8sQ0FDWCxTQUhhRSxNQUdiIn0=
