const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png",
  },
];

//* salvo i DOM node necessari
const ulEl = document.getElementById("team");
const rowEl = document.querySelector(".row");

renderTeamMembers(teamMembers, ulEl);

//*inizializzo la funzione renderTeamMembers

function renderTeamMembers(teamMembers, nodeEl) {
  //*inizializzo il ciclo for per recuperare i singoli membri del team
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    //*genero il markup dei singoli membri
    const memberMarkUp = generateMemberMarkup(member);
    //*inserisco il markup dei singoli membri
    nodeEl.insertAdjacentHTML("beforeend", memberMarkUp);
  }
}
//*inizializzo la funzione generateMemberMarkup
function generateMemberMarkup(member) {
  //* salvo le proprietà degli object che mi interessa richiamare in member
  const { name, role, email, img } = member;
  //* salvo in una variabile il markUp dei membri per inserirlo nell'html e generare la card
  const memberMarkUp = `
    <div class="col">
      <div class="card">
      //*applico il display flex per allineare i contenuti delle card e ridimensionare le imamgini
      <div class=" d-flex align-items-center">
      //*inserisco le singole immagini e rendo le immagini responsive con img-fluid, spostandole sulla sinistra con card-img-left
        <img src="${img}" alt="${name}" class="card-img-left img-fluid"/>
        //* modifico il colore del bg delle card e il colore dei testi con le classi bootstrap
        <div class="card-body bg-black">
          <h3 class="text-white">${name}</h3>
          <div class="text-white">${role}</div>
          <div class="text-info">${email}</div>
        </div>
      </div>
    </div>
  `;
  return memberMarkUp;
}
