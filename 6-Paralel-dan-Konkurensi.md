### Menurut Bob Pike, Pencipta Bahasa Golang.
**Konkurensi adalah** bagaimana cara menghadapi banyak pekerjaan sekaligus.
**Paralel adalah** bagaimana melakukan banyak pekerjaan dengan serentak.

### Contoh Kasus:

Katakanlah sebuah dapur restoran bertugas untuk menyajikan nasi goreng. Penyajian nasi goreng tentunya terdiri dari beberapa task / pekerjaan hingga tersajinya sebuah nasi goreng yang lezat. Berikut ilustrasinya, ada beberapa cara menyajikan nasi goreng:

**1. Contoh solusi dengan Sekuensial:**
	
Seluruh pekerjaan dikerjakan berurutan. Pekerjaan berikutnya hanya dilakukan jika pekerjaan sebelumnya sudah selesai. Kita andaikan dapur tersebut hanya punya satu koki, yaitu Ari. Misal, Ari mengupas bawang, setelah itu memasak telur, setelah itu memasak nasi, setelah itu menggoreng nasi bersama dengan telur dan bawang, setelah itu disajikan.

Kekurangan dari penjadwalan sekuensial ini adalah terlalu banyak waktu yang terbuang untuk menunggu. Contohnya saat menanak nasi, kita hanya diam karena itu sepenuhnya dikerjakan oleh rice cooker, misalnya. Kita hanya menunggu nasi matang (meskipun kita yang memasukkan nasi dan mengambil nasi). Meskipun sama-sama jadi nasi goreng, tapi banyak waktu yang terbuang percuma.

**2. Contoh solusi dengan konkurensi:**
	
Saat menerapkan pendekatan konkurensi, seorang koki bisa menanak nasi sambil mengupas bawang, karena menanak nasi tidak harus menunggu bawang dikupas, dan mengupas bawang tidak harus menunggu nasi selesai dimasak. Sembari mengupas bawang, Ari bisa sekali-sekali menengok ke rice cooker untuk mengecek apakah nasi sudah matang? Meskipun kokinya hanya satu, kedua pekerjaan dapat dimulai tanpa harus menunggu salah satunya selesai, yaitu, nasi dimasak, ditinggal untuk mengupas bawang, lalu entah yang mana yang selesai duluan, tidak ada hubungannya. Seorang koki bisa saja berganti task setiap 5 menit dari mengecek nasi, mengupas bawang, dan memasak telur. Ketiga task ini bisa dimulai bergantian meskipun selesainya tidak harus menunggu yang lain selesai. Ini yang dinamakan konkurensi. Konkurensi tetap bisa dilakukan meskipun kokinya hanya satu.


**3. Contoh solusi dengan paralel:**

Paralelisme, memang benar, adalah konsep yang berbeda dengan konkurensi. Apabila konkurensi menjawab bagaimana cara pekerjaan dijadwalkan, paralelisme menjawab bagaimana caranya suatu pekerjaan dibagi. Keduanya sama-sama berusaha agar keseluruhan pekerjaan tersebut selesai dengan lebih efisien.

Nah, bagaimana caranya pekerjaan memasak nasi goreng ini dibagi-bagi agar lebih efisien? Tentu saja kalau hanya satu nasi goreng yang dibuat, tidak ada gunanya kita membagi-bagi pekerjaan, karena hasilnya cuma satu. Hanya dengan menggunakan penjadwalan konkurensi, itu bisa dilakukan dengan efisien, jika kita hanya butuh satu nasi goreng.
	
Namun kalau kita harus memproduksi 100 nasi goreng, bagaimana caranya melakukan pekerjaan tersebut dengan mangkus dan sangkil? Pendekatan paralelisme mengharuskan kita untuk memperbanyak kokinya, peralatan dapur, bahan makanan, dan bumbu. Setelah semuanya tersedia, itupun belum berguna kalau memasaknya tidak secara paralel.

Lantas apa sih pekerjaan paralel itu? Pekerjaan paralel adalah pekerjaan yang bisa dikerjakan di saat bersamaan dan tidak saling beririsan. Saat memecah tugas menjadi tugas paralel, kita harus menentukan dulu, level paralel apa yang dipakai? Biasanya sih, level paralel yang dipakai itu di level data. Artinya datanya yang paralel, alias tidak beririsan, meskipun pekerjaannya sama.

Contohnya, dapur kita punya 4 koki. Di tahap awal pembuatan nasi goreng lezat kita ini, semua koki mengupas bawang. Di sini kita punya 4 pekerjaan paralel, yaitu mengupas bawang, masing-masing dilakukan oleh seorang koki. Pekerjaannya sama, yaitu mengupas bawang. Namun datanya beda (maksudnya bawangnya). Tidak mungkin Koki Budi dan Koki Ari mengupas bawang yang sama, aneh benar, kan. Nah ini maksudnya mengupas bawang secara paralel. Masing-masing koki mengambil satu bawang yang berbeda, dikupas lalu menghasilkan irisan bawang, kemudian lanjut lagi untuk bawang yang lain.

Setelah selesai mengupas bawang, irisan bawang tersebut dikumpulkan dan saatnya koki-koki ini mengerjakan hal lain. Jadi sudah jelas bedanya, kan? Apabila Ari dan Budi mengupas bawang sedangkan Citra dan Dini memotong cabai, apa yang terjadi? Kita katakan pengupasan bawang dan pemotongan cabai dilakukan secara konkuren. Tapi kita bisa bilang juga, bawangnya dikupas secara paralel oleh Ari dan Budi, atau cabainya dipotong secara paralel oleh Citra dan Dini.

### Sumber:
[1] https://medium.com/pujanggateknologi/mengenal-konkurensi-dan-paralelisme-10746e1b7ab6
[2] https://id.quora.com/Apa-perbedaan-konkurensi-dan-paralelisme

