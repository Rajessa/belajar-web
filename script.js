const inputKodeBuku = document.getElementById("kodeBuku");
const inputJudul = document.getElementById("judul");
const inputPengarang = document.getElementById("pengarang");
const inputPenerbit = document.getElementById("penerbit");
const inputTahunTerbit = document.getElementById("tahunTerbit");

function addData() {
  const kodeBuku = inputKodeBuku.value;
  const judul = inputJudul.value;
  const pengarang = inputPengarang.value;
  const penerbit = inputPenerbit.value;
  const tahunTerbit = inputTahunTerbit.value;

  const tableData = document.getElementById("data-table");
  const row = document.createElement("tr");

  const value = [kodeBuku, judul, pengarang, penerbit, tahunTerbit];

  for (let i = 0; i < value.length; i++) {
    const cell = document.createElement("td");
    cell.innerHTML = value[i];
    row.appendChild(cell);
  }

  tableData.querySelector("tbody").appendChild(row);

  inputKodeBuku.value = "";
  inputJudul.value = "";
  inputPengarang.value = "";
  inputPenerbit.value = "";
  inputTahunTerbit.value = "";
}
