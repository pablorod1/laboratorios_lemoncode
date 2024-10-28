const pattern =
  /<img src="(?<urlImagen>http:\/\/localhost:3000\/\.\/\w+\.\w+)"/gm;

export const obtenerImagenes = (texto: string): string[] => {
  const imagenes = texto.match(pattern);
  if (!imagenes) {
    alert("No se encontraron imagenes");
    return [];
  }
  return imagenes;
};

export const obtenerURl = (imagenes: string[]): string[] => {
  const urls = imagenes
    .map((imagen) => {
      const coincidencias = [...imagen.matchAll(pattern)];
      return coincidencias.map((coincidencia) => {
        const { urlImagen } = coincidencia.groups as any;
        return urlImagen;
      });
    })
    .flat();
  return urls;
};
