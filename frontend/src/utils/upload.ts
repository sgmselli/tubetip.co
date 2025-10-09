import heic2any from "heic2any";

export const handleHeicFileUpload = async (file: File | null) => {
    if (!file) return null;

    const isHeic =
      file.type === "image/heic" ||
      file.type === "image/heif" ||
      file.name.toLowerCase().endsWith(".heic") ||
      file.name.toLowerCase().endsWith(".heif");

    if (!isHeic) return file;

    try {
      const convertedBlob = await heic2any({ blob: file, toType: "image/jpeg" });
      const jpegBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;

      const convertedFile = new File(
        [jpegBlob],
        file.name.replace(/\.(heic|heif)$/i, ".jpg"),
        { type: "image/jpeg" }
      );

      return convertedFile;
    } catch (err) {
      return file;
    }
};