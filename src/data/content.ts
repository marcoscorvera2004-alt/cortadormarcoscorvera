import serviceEventsImg from "@/assets/service-events.jpg";
import serviceWithPieceImg from "@/assets/service-with-piece.jpg";
import serviceCuttingImg from "@/assets/service-cutting.jpg";
import product1Img from "@/assets/product-1-bellota-100.jpg";
import product2Img from "@/assets/product-2-bellota-50-75.jpg";
import product3Img from "@/assets/product-3-cebo-campo.jpg";
import product4Img from "@/assets/product-4-cebo-iberico.jpg";
import product5Img from "@/assets/product-5-duroc.jpg";
import product6Img from "@/assets/product-6-sobres.jpg";
import product7Img from "@/assets/product-7-tacos.jpg";
import product8Img from "@/assets/product-8-huesos.jpg";

export interface Service {
  id: string;
  name: string;
  price: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  premiumNote: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  images: string[];
}

export const services: Service[] = [
  {
    id: "cortador-eventos",
    name: "Servicio de corte de jamón para eventos exclusivos",
    price: "Consultar",
    shortDescription: "Cortador profesional para bodas, eventos corporativos y celebraciones privadas de alto nivel.",
    fullDescription: "Ofrecemos un servicio exclusivo de corte de jamón a cuchillo para todo tipo de eventos. Bodas, celebraciones, eventos corporativos, inauguraciones y fiestas privadas. Nuestro cortador profesional se desplaza a su evento con todo el equipo necesario, incluyendo jamonero profesional, cuchillería especializada y presentación premium. Una experiencia gastronómica que sus invitados no olvidarán.",
    image: serviceEventsImg,
    premiumNote: "Cada servicio está diseñado para ofrecer una experiencia elegante, cuidada y acorde al nivel del evento.",
  },
  {
    id: "corte-con-pieza",
    name: "Corte artesanal a cuchillo con pieza seleccionada",
    price: "Pieza de jamón + 6,5€/kg corte",
    shortDescription: "Seleccionamos la pieza de jamón ibérico y realizamos el corte profesional artesanal. Un servicio integral de excelencia.",
    fullDescription: "Servicio completo que incluye la pieza de jamón ibérico seleccionada por nuestros expertos y el corte profesional a cuchillo. Nos encargamos de todo: selección de la pieza, transporte, corte y presentación. El precio incluye la pieza de jamón más 6,5€ por kilogramo de corte. Ideal para quienes buscan la comodidad de un servicio integral sin preocuparse de nada.",
    image: serviceWithPieceImg,
    premiumNote: "Cada servicio está diseñado para ofrecer una experiencia elegante, cuidada y acorde al nivel del evento.",
  },
  {
    id: "corte-sin-pieza",
    name: "Servicio profesional de corte artesanal (pieza del cliente)",
    price: "8€/kg",
    shortDescription: "Usted pone la pieza, nosotros la excelencia del corte profesional a cuchillo. Máxima precisión artesanal.",
    fullDescription: "Si ya dispone de su propia pieza de jamón, nuestro cortador profesional se encargará de realizar el corte a cuchillo con la máxima precisión y arte. El precio es de 8€ por kilogramo de la pieza. Nos desplazamos a su domicilio o local con todo el equipo necesario. Cada loncha cortada a mano conserva todo el sabor y la textura que solo el corte a cuchillo puede ofrecer.",
    image: serviceCuttingImg,
    premiumNote: "Cada servicio está diseñado para ofrecer una experiencia elegante, cuidada y acorde al nivel del evento.",
  },
];

export const products: Product[] = [
  {
    id: "jamon-iberico-bellota",
    name: "Jamón de bellota 100% ibérico",
    price: "Consultar",
    description: "Jamón ibérico de bellota de máxima calidad, con curación mínima de 36 meses. Sabor intenso, textura fundente y aroma inigualable. Procedente de cerdos ibéricos alimentados con bellotas en dehesas extremeñas.",
    image: product1Img,
    images: [product1Img],
  },
  {
    id: "jamon-iberico-cebo-campo",
    name: "Jamón de bellota 50%/75% ibérico",
    price: "Consultar",
    description: "Jamón ibérico de cebo de campo, una opción excepcional con curación de 24 meses. Equilibrio perfecto entre sabor y precio. Procedente de cerdos ibéricos criados en libertad.",
    image: product2Img,
    images: [product2Img],
  },
  {
    id: "jamon-serrano-reserva",
    name: "Jamón ibérico cebo de campo",
    price: "Consultar",
    description: "Jamón serrano gran reserva con más de 18 meses de curación. Un clásico de nuestra gastronomía con sabor suave y delicado. Perfecto para disfrutar en cualquier ocasión.",
    image: product3Img,
    images: [product3Img],
  },
  {
    id: "paleta-iberica",
    name: "Jamón de cebo ibérico",
    price: "Consultar",
    description: "Paleta ibérica de bellota, más pequeña que el jamón pero con un sabor igualmente extraordinario. Curación mínima de 24 meses. Ideal para familias o grupos reducidos.",
    image: product4Img,
    images: [product4Img],
  },
  {
    id: "jamon-iberico-reserva",
    name: "Jamón blanco Duroc",
    price: "Consultar",
    description: "Jamón ibérico reserva con 30 meses de curación. Un producto premium con un sabor profundo y complejo. Seleccionado pieza a pieza por nuestros expertos.",
    image: product5Img,
    images: [product5Img],
  },
  {
    id: "sobres-cortados-cuchillo",
    name: "Sobres de 100g Cortados a Cuchillo",
    price: "Consultar",
    description: "Lonchas de jamón ibérico cortadas a mano por nuestro maestro cortador, envasadas al vacío en sobres de 100g. La forma más cómoda de disfrutar del auténtico sabor del corte a cuchillo.",
    image: product6Img,
    images: [product6Img],
  },
  {
    id: "sobres-tacos",
    name: "Sobres de tacos de jamón 100gr",
    price: "Consultar",
    description: "Tacos de jamón ibérico perfectos para cocinar. Ideales para guisos, revueltos, croquetas y todo tipo de elaboraciones. Envasados al vacío para conservar todo su sabor.",
    image: product7Img,
    images: [product7Img],
  },
  {
    id: "sobres-huesos",
    name: "Huesos de jamón cortados",
    price: "Consultar",
    description: "Huesos de jamón ibérico perfectos para preparar caldos, sopas y guisos con un sabor extraordinario. Envasados para su óptima conservación.",
    image: product8Img,
    images: [product8Img],
  },
];