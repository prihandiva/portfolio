import { reactive } from 'vue'

export const portfolioData = reactive({
  profile: {
    name: "Fitria Ramadhani Prihandiva",
    nickname: "Prihandiva",
    title: "Sistem Analis & Junior Developer",
    about: "Nama saya Fitria Ramadhani Prihandiva, mahasiswa D4 Sistem Informasi Bisnis di Politeknik Negeri Malang, saat ini sedang menempuh semester akhir. Saya memiliki ketertarikan pada bidang sistem analis, dan juga pengembangan sistem dan sedang mencari kesempatan untuk mengembangkan keterampilan saya secara langsung di dunia kerja. Dengan portofolio ini, saya ingin menunjukkan beberapa proyek dan pengalaman yang telah saya kerjakan, serta keahlian yang saya miliki. Saya sangat antusias untuk bisa belajar dan berkontribusi di perusahaan Bapak/Ibu.",
    linkedin: "https://linkedin.com/in/prihandiva",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prihandiva&backgroundColor=b6e3f4,c0aede,d1d4f9"
  },
  education: [
    {
      degree: "D4 Sistem Informasi Bisnis",
      institution: "Politeknik Negeri Malang",
      gpa: "3.79",
      type: "education"
    },
    {
      title: "Junior Developer Internship",
      company: "PT Rekaindo Global Jasa Inka Group",
      type: "experience"
    },
    {
      title: "Basic Mandarin Class",
      company: "BIP Pare, Mandarin Corner Klenteng Eng An Kiong (HSK 1)",
      type: "course"
    },
    {
      title: "Course Class Dsarea",
      company: "Excel, Python (Beginner Level)",
      type: "course"
    },
    {
      title: "Course Class DQLAB",
      company: "R Studio, SQL (Beginner Level)",
      type: "course"
    }
  ],
  skills: [
    { name: "Programming", image: "https://picsum.photos/seed/prog/400/300" },
    { name: "Data Visualization", image: "https://picsum.photos/seed/data/400/300" },
    { name: "Administration / Documentation", image: "https://picsum.photos/seed/admin/400/300" }
  ],
  projects: [
    {
      id: 1,
      title: "Simple Distribution System",
      tech: "Java",
      description: "Saya mengembangkan sistem simple menggunakan Java untuk membantu pencatatan pembelian dan penjualan di distributor semen. Aplikasi ini memiliki 6 fitur utama.",
      link: "https://github.com/prihandiva/dasarpemrograman",
      color: "blue",
      image: "https://picsum.photos/seed/java/600/400"
    },
    {
      id: 2,
      title: "SISKA Polinema - Sistem Survey Polinema",
      tech: "PHP Native",
      description: "Project CRUD pertama saya berbasis PHP Native. Website ini memungkinkan dua jenis pengguna, yaitu admin dan 6 tipe responden, untuk mengelola dan mengisi survei. Fitur utama mencakup autentikasi, pengelolaan data responden, dan visualisasi hasil survei sederhana.",
      link: "https://github.com/prihandiva/pemrogramanweb",
      color: "purple",
      image: "https://picsum.photos/seed/php/600/400"
    },
    {
      id: 3,
      title: "DOSIMAL - Sistem Manajemen SDM",
      tech: "Laravel",
      description: "Dalam proyek ini, saya mengambil peran sebagai System Analyst, mulai dari analisis kebutuhan hingga pembuatan dokumen perancangan sistem. Saya juga turut membantu dalam proses pengembangan aplikasi sebagai programmer pendukung.",
      link: "https://github.com/Fafayasinta/PBL-WEB",
      demoLink: "https://drive.google.com/file/d/1txtI7DbaVNPCXWFVAnAhQqsyyYz2sj8b/view?usp=sharing",
      color: "pink",
      image: "https://picsum.photos/seed/laravel/600/400"
    },
    {
      id: 4,
      title: "Sales Performance Dashboard",
      tech: "Power BI",
      description: "Saya merancang dashboard penjualan menggunakan Power BI untuk menampilkan data performa sales HP. Visualisasi dibuat interaktif agar memudahkan dalam menganalisis tren penjualan dan performa tiap sales.",
      link: "https://drive.google.com/drive/folders/15KWxRPGSSoygg9n3-RSjYqg6PErKSx7Y?usp=sharing",
      color: "navy",
      image: "https://picsum.photos/seed/powerbi/600/400"
    },
    {
      id: 5,
      title: "Sales Performance Dashboard 2",
      tech: "Google Looker Studio",
      description: "Saya mengolah dan memvisualisasikan data menggunakan Google Looker Studio. Proyek ini berfokus pada penyajian data dalam bentuk dashboard yang mudah dibaca dan bisa diakses secara real-time oleh pengguna.",
      link: "https://lookerstudio.google.com/reporting/85c86c26-3328-46fe-954a-a55368db7c11",
      color: "blue",
      image: "https://picsum.photos/seed/looker/600/400"
    },
    {
      id: 6,
      title: "ETL Processing",
      tech: "Data Warehouse with Pentaho",
      description: "Saya melakukan proses ETL (Extract, Transform, Load) menggunakan Spoon Pentaho Data Integration (PDI). Data dari berbagai sumber diproses dan dimuat ke dalam database, sebagai bagian dari pelatihan pengolahan data secara otomatis.",
      link: "https://drive.google.com/drive/folders/1stRagl_JPFjbll1q2mNeI5-4dl6BYi5n?usp=sharing",
      color: "purple",
      image: "https://picsum.photos/seed/pentaho/600/400"
    },
    {
      id: 7,
      title: "SIPO PT Rekaindo Global Jasa",
      tech: "Laravel, React Native (Expo Go)",
      description: "Saya mengembangkan website menggunakan laravel dan juga mobile apps menggunakan React Native dengan framework Expo Go.",
      link: "https://sipo.ptrekaindo.co.id/",
      color: "pink",
      image: "https://picsum.photos/seed/react/600/400"
    }
  ],
  softSkills: [
    {
      title: "MC Formal Dialog Dosen Mahasiswa Tahun 2023",
      description: "Menjadi Master of Ceremony (MC) dalam acara resmi tingkat jurusan yang mempertemukan dosen dan mahasiswa dalam sesi diskusi terbuka. Berperan aktif dalam membangun suasana acara yang kondusif, komunikatif, dan profesional.",
      image: "https://picsum.photos/seed/mc/400/300"
    },
    {
      title: "Administrasi, Customer Service",
      description: "Menjadi narahubung utama dalam proses pengumpulan, validasi dan pengelolaan berkas SKKM (Satuan Kredit Kegiatan Mahasiswa) untuk jurusan Teknologi Informasi. Bertanggung jawab dalam koordinasi antar mahasiswa dan pihak administrasi.",
      image: "https://picsum.photos/seed/admin2/400/300"
    },
    {
      title: "Basic Mandarin",
      description: "Pernah mengikuti kursus Bahasa Mandarin tingkat dasar (HSK 1) untuk mengembangkan kemampuan bahasa asing, dengan fokus pada penguasaan pinyin, nada, kosakata dasar, dan percakapan sehari-hari.",
      image: "https://picsum.photos/seed/mandarin/400/300"
    }
  ],
  organizations: [
    {
      name: "Himpunan Mahasiswa Teknologi Informasi",
      roles: [
        "Organizing Committee Departemen Eksternal 2023/2024 - PJ SKKM Jurusan TI",
        "Steering Committee Departemen Eksternal 2024/2025 - Kastaff Kesejahteraan Mahasiswa"
      ],
      image: "https://picsum.photos/seed/hmti/400/300"
    },
    {
      name: "Polinema Mengajar",
      roles: [
        "Staff Public Relation"
      ],
      image: "https://picsum.photos/seed/mengajar/400/300"
    },
    {
      name: "Ramadhan Berbagi & Seminar",
      roles: [
        "Staff Divisi Eksternal 2024/2025 - Koordinator Sie Humas Ramadhan Berbagi",
        "Sie Acara Seminar dan Workshop"
      ],
      image: "https://picsum.photos/seed/ramadhan/400/300"
    }
  ]
});
