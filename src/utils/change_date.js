export const ubahDate = (date) => {
  const tanggal = new Date(date);

  const hari = tanggal.getDate();
  const bulan = tanggal.getMonth() + 1;
  const tahun = tanggal.getFullYear();

  return `${hari}-${bulan}-${tahun}`;
};
