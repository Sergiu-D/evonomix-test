function carousel() {
  appendCarouselElements();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
  });
}

const slides = [
  {
    title: "Oferta saptamanii",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    buttonText: "Detalii",
    buttonLink: "/detalii",
    background: {
      backgroundImage: "./img/slider-image-1.png",
      backgroundColor: "#444",
    },
  },
  {
    title: "oferta zilei",
    buttonText: "Detalii",
    buttonLink: "/detalii",
    background: {
      backgroundColor: "orangered",
    },
  },
  {
    description: "lorem ipsum sdfsfd ddgsgdsf",
    buttonText: "Detalii",
    buttonLink: "/detalii",
    background: {
      //   backgroundImage: "/img",
      backgroundColor: "blueviolet",
    },
  },
  {
    title: "oferta anului",
    description: "lorem ipsum sdfsfd ddgsgdsf",
    buttonLink: "/detalii",
    background: {
      backgroundColor: "blueviolet",
    },
  },
];

const createCarouselElements = (slides) => {
  const elementTemplate = slides.map((el) => {
    // Conditionals
    const isTitle = el.hasOwnProperty("title");
    const isDescription = el.hasOwnProperty("description");
    const isButtonText = el.hasOwnProperty("buttonText");
    const isButtonLink = el.hasOwnProperty("buttonLink");
    const isBackgroundImage = el.background.hasOwnProperty("backgroundImage");

    return `<div class="slide text-white" style=${
      isBackgroundImage
        ? `"background: url(${el.background.backgroundImage}) no-repeat center"`
        : `"background-color: ${el.background.backgroundColor}"`
    }>
                <div class="container slide_content" >
                    ${isTitle ? `<h1>${el.title}</h1>` : ""}
                    ${isDescription ? `<p>${el.description}</p>` : ""}
                    ${
                      isButtonText && isButtonLink
                        ? `<a
                          class="btn btn-custom-primary"
                          href="${el.buttonLink}"
                        >
                          <i class="icon-star"></i>${el.buttonText}
                        </a>`
                        : ""
                    }
                </div>
            </div>`;
  });

  return elementTemplate;
};

const appendCarouselElements = () => {
  const projects = createCarouselElements(slides).join("");

  return $(".owl-carousel").html(projects);
};

carousel();
