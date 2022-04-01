const HEADER = "Galeria Franciszka Łopuszańskiego";

const NAVBAR_DATA = [
    { id: 1, url: "/", label: "Strona główna" },
    { id: 2, url: "#services", label: "Tosia L." },
    { id: 3, url: "/", label: "Franek Ł.", active: true },
    { id: 4, url: "#testimonials", label: "Ala B." },
    { id: 5, url: "#footer", label: "Jacek J." }
];

const AUTHOR = {
    ALT: "Franciszek Łopuszański",
    IMAGE: "images/me.png",
    DESCRIPTION: "Nazywam się Franciszek Łopuszański uczęszczam do Liceum dwujęzycznego imienia Edwarda Dembowskiego nr. 1 w Gliwicach. Interesuję się przedmiotami ścisłymi, a szczegulnie informatyką i fizyką. W wolnym czasie uczę się do szkoły i rozwijam własne projekty przy użyciu komputera i innego sprzętu. Zdjęcia wykonane przeze mnie mają przedstawiać obiekty, które wykorzystuję na codzień, lub te, które łączą się z moimi zainteresowaniami i rutynami."
}

const IMAGES = [
    [
        {
            image: "images/hotair.jpg",
            description: "Sprzęt ten służy mi do realizowania projektów związanych z lutowaniem i elektroniką, takich jak stworzenie adaptera do starego kontrolera od konsoli nes na pc, czy naprawy starego telefonu.",
            title: "Hotair i lutownica"
        },
        {
            image: "images/kot2.jpg",
            description: "Stefan, to mój kot je, śpi gryzię moją siostrę :).",
            title: "Stefan"
        },
        {
            image: "images/osiedle.jpg",
            description: "Zdjęcie przedstawia ośedlę na, którym mieszkam i przez, które przechodzę chodziennie w drodze do szkoły.",
            title: "Osiedle"
        },
        {
            image: "images/vr.jpg",
            description: "Zdjęcie przedstawia google vr, które pokazują moje zainteresowanie nowym technologiami. Korzystam z nich do celów rozrywkowych, ale także nauki programowania dla środowisk XR.",
            title: "Oculus quest / vr"
        }
    ],
    [
        {
            image: "images/keyboard.jpg",
            description: "Zdjęcie przedstawia mój pierwszy keyboard, któryy mam od nie dawna i na, którym uczę się grać.",
            title: "Keyboard"
        },
        {
            image: "images/ksiazki1.jpg",
            description: "Książki do informatyki, które kupiłem lub porzyczyłem od taty. Te przedstawione na zdjęciu dotyczą języka c++ w, którym realizuje niektóre zz swoich projektów.",
            title: "Książki / Podręczniki do informatyki"
        },
        {
            image: "images/lodowka.jpg",
            description: "Lodówka zapewnia świerzość jedzeniu, które codziennie jem :).",
            title: "Lodówka"
        },
        {
            image: "images/robot.jpg",
            description: "Zdjęcie przedstawia robota 'lego ev3', na którym zaczynałem się uczyć programowania maszyn oraz wchodzenia w interakcje z prawdziwym światem za pomocą oprogramowania.",
            title: "Lego robot"
        }
    ],
    [
        {
            image: "images/kot1.jpg",
            description: "Mój kot na parapecie.",
            title: "Stefan na parapecie"
        },
        {
            image: "images/laptop.jpg",
            description: "Laptop jest mojm głównym narzędziem pracy, na, którym realizuje większość swoich projektów informatycznych, szczególnie gdy jestem poza domem.",
            title: "Laptop"
        },
        {
            image: "images/pady.jpg",
            description: "Pady pokazują moje zainteresowanie grami video, szczególnie grami logicznymi takimi jak: 'while true learn', 'shenzen io' i 'factorio'.",
            title: "Pady od konsoli xbox 360"
        },
        {
            image: "images/podrecznik.jpg",
            description: "Dużą ilość swojego czasu wolnego spędzam na nauce, co pokazują moje podręczniki.",
            title: "Podręczniki"
        },
        {
            image: "images/pies.jpg",
            description: "Pies( nic dodać nic ująć ).",
            title: "Zuzia"
        }
    ]
]

const MOCK_DATA = {
    HEADER,
    NAVBAR_DATA,
    AUTHOR,
    IMAGES
  };
  export default MOCK_DATA;