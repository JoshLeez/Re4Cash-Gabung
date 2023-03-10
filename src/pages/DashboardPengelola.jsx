import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footerdashboardpengelola } from "../components/Footer";
import GrafikCardPengelola from "../components/GrafikCardPengelola";
import { HOCdashboardpengelola } from "../components/HOC";
import JmlDataCardPengelola from "../components/JmlDataCardPengelola";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import axiosInstance from "../utils/axios";
import "./styles/dashboardpengelola.css";

const DashboardPengelola = () => {
  const { id } = useParams();
  const [pengelola, setPengelola] = useState({});
  const [alamatPengelola, setAlamatPengelola] = useState({});

  const getPengelola = async () => {
    try {
      const {data} = await axiosInstance.get('/pengelola-by-id');
      // console.log(data.data[0]);
      setPengelola(data.data[0]);
      setAlamatPengelola(data.alamat[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPengelola();
  }, []);

  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola />
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-section-dashboard-utama">
              <div className="card-profil-dashboard-utama edit">
                <div className="profile-picture-dashboard-utama">
                  <img src="/profile-picture-pengelola.png" />
                  <h1>{pengelola.nama_pengelola}</h1>
                  <p>Nama Toko</p>
                </div>
                <div className="profile-desc-dashboard-utama">
                  <div className="profile-desc-dashboard-utama-detail">
                    <iconify-icon icon="gg:profile" />
                    <h4>{pengelola.fullname_users}</h4>
                  </div>
                  <div className="profile-desc-dashboard-utama-detail">
                    <iconify-icon icon="material-symbols:location-on-outline-rounded" />
                    <h4>
                      Jl. {alamatPengelola.alamat_lengkap},{" "}
                      {alamatPengelola.provinsi}, Kec.{" "}
                      {alamatPengelola.kecamatan}, Kota{" "}
                      {alamatPengelola.kabupaten_kota}{" "}
                      {alamatPengelola.kode_pos}.
                    </h4>
                  </div>
                  <div className="profile-desc-dashboard-utama-detail">
                    <iconify-icon icon="ic:baseline-phone-iphone" />
                    <h4>{pengelola.no_hp_pengelola}</h4>
                  </div>
                </div>
                <Link to={`/profil-akun-pengelola/${id}`}>
                  <iconify-icon icon="material-symbols:edit" />
                </Link>
              </div>
              <GrafikCardPengelola
                icon="icons8:buy"
                title="Total income penjualan"
                nilai="Rp12.900.000"
              />
              <GrafikCardPengelola
                icon="material-symbols:content-paste-search"
                title="Data Pencarian"
                nilai="3 Barang Terbeli"
              />
              <GrafikCardPengelola
                icon="ic:outline-savings"
                title="Total Tagihan Tabungan"
                nilai="-Rp900.000"
              />
            </section>
            <section className="wrapper-section-dashboard-utama">
              <JmlDataCardPengelola
                icon="icons8:buy"
                jumlah="128"
                data="Data Penjualan"
              />
              <JmlDataCardPengelola
                icon="material-symbols:content-paste-search"
                jumlah="37"
                data="Data Pencarian"
              />
              <JmlDataCardPengelola
                icon="ic:outline-savings"
                jumlah="84"
                data="Data Penabung"
              />
              <JmlDataCardPengelola
                icon="mdi:shop-find-outline"
                jumlah="4"
                data="Lapak Penjualan"
              />
              <JmlDataCardPengelola
                icon="mdi:shop-edit-outline"
                jumlah="1"
                data="Lapak Pencarian"
              />
            </section>

            <section className="wrapper-section-dashboard-utama">
              <div className="prevtabel-dashutama">
                <div className="judul-tabel-dashutama">
                  <h3>Lapak Penjualan</h3>
                  <iconify-icon icon="material-symbols:edit" />
                </div>
                <div className="wrapper-table-data-dashutama">
                  <table id="tabel-pengelola-dashutama">
                    <tr>
                      <th>No</th>
                      <th>Jenis</th>
                      <th>Foto Barang</th>
                      <th>Nama Barang</th>
                      <th>Harga</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Daur Ulang</td>
                      <td>
                        <img src="/prevtabel-dashuatama-potbunga.png" />
                      </td>
                      <td>Pot dari bahan daur ulang</td>
                      <td>Rp. 20.000</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="prevtabel-dashutama">
                <div className="judul-tabel-dashutama">
                  <h3>Lapak Pencarian</h3>
                  <iconify-icon icon="material-symbols:edit" />
                </div>
                <div className="wrapper-table-data-dashutama">
                  <table id="tabel-pengelola-dashutama">
                    <tr>
                      <th>No</th>
                      <th>Jenis</th>
                      <th>Foto Barang</th>
                      <th>Judul Pencarian</th>
                      <th>Harga</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mentahan</td>
                      <td>
                        <img src="/prevtabel-dashuatama-minyakjelantah.png" />
                      </td>
                      <td>Saya Mencari Minyak Jelantah Kiloan</td>
                      <td>Rp15.000</td>
                    </tr>
                  </table>
                </div>
              </div>
            </section>
          </div>
          <Footerdashboardpengelola />
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default DashboardPengelola;
