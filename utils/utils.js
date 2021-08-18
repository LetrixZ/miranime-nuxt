import FileSaver from "file-saver";

export function readFileAsync(file, type) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    if (type === "string") {
      reader.readAsText(file);
    } else reader.readAsArrayBuffer(file);
  });
}

export const getExtension = (filename) => filename.split(".").slice(-1)[0];

export const downloadFile = async (url) => {
  const response = await fetch(url);
  return await response.blob();
};

export const saveFile = async (blob, filename) => {
  FileSaver.saveAs(blob, filename);
};

export const pad = (num, size) => {
  return ("000000000" + num).substr(-size);
};

export const season = (season) => {
  switch (season) {
    case "SUMMER":
      return "Verano";
    case "WINTER":
      return "Invierno";
    case "SPRING":
      return "Primavera";
    case "FALL":
      return "Otoño";
    default:
      return season;
  }
};

export const status = (status) => {
  switch (status) {
    case 1:
      return "En Emisión";
    case 2:
      return "Finalizado";
    case 3:
      return "Proximamente";
    default:
      return "Sin definir";
  }
};

export const getSource = (site) => {
  const { source, slug } = site;
  switch (source) {
    case "AnimeFenix":
      return `https://www.animefenix.com/${slug}`;
    case "AnimeID":
      return `https://animeid.tv/${slug}`;
    case "AnimeFLV":
      return `https://animeflv.net/anime/${slug}`;
    case "AnimeTW":
      return `https://animetw.net/anime/${slug}`;
    case "JkAnime":
      return `https://jkanime.net/${slug}`;
    case "MonosChinos":
      return `https://monoschinos2.com/anime/${slug}`;
    case "OtakusTV":
      return `https://www.otakustv.com/anime/${slug}`;
    case "TioAnime":
      return `https://tioanime.com/anime/${slug}`;
    default:
      "";
  }
};
