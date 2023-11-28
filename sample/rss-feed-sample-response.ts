// Contains the sample response from `rss-parser` of each RSS feed

const utusanSampleResponse = [
	{
		creator: 'HAKIMI ISMAIL',
		title: 'Erry dinobat Olahragawan, Joe Ee Olahragawati Wilayah Persekutuan',
		link: 'https://www.utusan.com.my/sukan/2023/11/erry-dinobat-olahragawan-joe-ee-olahragawati-wilayah-persekutuan/?utm_source=rss&utm_medium=rss&utm_campaign=erry-dinobat-olahragawan-joe-ee-olahragawati-wilayah-persekutuan',
		pubDate: 'Tue, 28 Nov 2023 14:43:32 +0000',
		'content:encoded':
			'<div><img width="825" height="526" src="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1024x653.jpg" class="attachment-large size-large wp-post-image" alt="" loading="lazy" style="margin-bottom: 15px;" srcset="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1024x653.jpg 1024w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-600x383.jpg 600w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-768x490.jpg 768w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-250x160.jpg 250w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1536x980.jpg 1536w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-750x479.jpg 750w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1140x727.jpg 1140w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad.jpg 1600w" sizes="(max-width: 825px) 100vw, 825px" /></div><p><img width="50" height="32" src="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" srcset="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad.jpg 1600w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-600x383.jpg 600w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1024x653.jpg 1024w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-768x490.jpg 768w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-250x160.jpg 250w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1536x980.jpg 1536w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-750x479.jpg 750w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1140x727.jpg 1140w" sizes="(max-width: 50px) 100vw, 50px" /></p><p><span style="font-weight: 400">PUTRAJAYA: Jaguh angkat berat, Muhammad Erry Hidayat dan gimnas, Ng Joe Ee masing-masing dinobatkan sebagai Olahragawan dan Olahragawati Wilayah Persekutuan pada Majlis Anugerah Sukan Wilayah Persekutuan 2021/2022, malam ini.</span></p>\n' +
			'<p><span style="font-weight: 400">Kejayaan itu membolehkan Erry dan Joe Ee membawa pulang hadiah berupa piala pusingan, wang tunai RM8,000 dan juga barangan sukan bernilai RM1,000 yang disampaikan oleh Menteri Belia dan Sukan, Hannah Yeoh.</span></p>\n' +
			'<p><span style="font-weight: 400">Erry yang baharu sahaja meraikan ulang tahun yang ke-24, mengetepikan saingan sengit daripada atlet renang, Steve Khiew dan juga S. Prem Kumar (karate), manakala Joe Ee mengatasi dua penerjun, Nur Dhabitah Sabri dan juga Wendy Ng Yan Yee.</span></p>\n' +
			'<p><span style="font-weight: 400">Badang Wilayah Persekutuan yang juga anak kepada bekas jaguh angkat berat, Hidayat Hamidun itu dipilih sebagai olahragawan selepas melakar kejayaan cemerlang apabila merangkul pingat perak pada Kejohanan Angkat Berat Asia 2021.</span></p>\n' +
			'<p><span style="font-weight: 400">Beliau juga meraih pingat perak pada Sukan Komanwel 2022 Birmingham, pingat gangsa pada Sukan SEA Vietnam 2022, selain turut berjaya memperbaharui rekod kebangsaan dengan jumlah angkatan 310 kilogram (kg) bagi kategori 73kg.</span></p>\n' +
			'<p><span style="font-weight: 400">Kejayaan Erry yang turut dinobatkan sebagai Olahragawan Masum 2022 pada Julai lalu itu menjadikan beliau sebagai atlet angkat berat pertama merangkul gelaran Olahragawan Wilayah Persekutuan sejak ia mula dianjurkan pada tahun 2007.</span></p>\n' +
			'<p><span style="font-weight: 400">Sementara itu, Joe Ee, 18, yang mempamer aksi cemerlang sepanjang tahun lalu apabila merangkul dua pingat emas dalam disiplin bola dan riben pada Sukan Komanwel di Birmingham dan dia turut memenangi gelaran Olahragawati Kebangsaan 2022.- UTUSAN</span></p>\n' +
			'<p>The post <a rel="nofollow" href="https://www.utusan.com.my/sukan/2023/11/erry-dinobat-olahragawan-joe-ee-olahragawati-wilayah-persekutuan/">Erry dinobat Olahragawan, Joe Ee Olahragawati Wilayah Persekutuan</a> appeared first on <a rel="nofollow" href="https://www.utusan.com.my">Utusan Malaysia</a>.</p>\n',
		'content:encodedSnippet':
			'PUTRAJAYA: Jaguh angkat berat, Muhammad Erry Hidayat dan gimnas, Ng Joe Ee masing-masing dinobatkan sebagai Olahragawan dan Olahragawati Wilayah Persekutuan pada Majlis Anugerah Sukan Wilayah Persekutuan 2021/2022, malam ini.\n' +
			'Kejayaan itu membolehkan Erry dan Joe Ee membawa pulang hadiah berupa piala pusingan, wang tunai RM8,000 dan juga barangan sukan bernilai RM1,000 yang disampaikan oleh Menteri Belia dan Sukan, Hannah Yeoh.\n' +
			'Erry yang baharu sahaja meraikan ulang tahun yang ke-24, mengetepikan saingan sengit daripada atlet renang, Steve Khiew dan juga S. Prem Kumar (karate), manakala Joe Ee mengatasi dua penerjun, Nur Dhabitah Sabri dan juga Wendy Ng Yan Yee.\n' +
			'Badang Wilayah Persekutuan yang juga anak kepada bekas jaguh angkat berat, Hidayat Hamidun itu dipilih sebagai olahragawan selepas melakar kejayaan cemerlang apabila merangkul pingat perak pada Kejohanan Angkat Berat Asia 2021.\n' +
			'Beliau juga meraih pingat perak pada Sukan Komanwel 2022 Birmingham, pingat gangsa pada Sukan SEA Vietnam 2022, selain turut berjaya memperbaharui rekod kebangsaan dengan jumlah angkatan 310 kilogram (kg) bagi kategori 73kg.\n' +
			'Kejayaan Erry yang turut dinobatkan sebagai Olahragawan Masum 2022 pada Julai lalu itu menjadikan beliau sebagai atlet angkat berat pertama merangkul gelaran Olahragawan Wilayah Persekutuan sejak ia mula dianjurkan pada tahun 2007.\n' +
			'Sementara itu, Joe Ee, 18, yang mempamer aksi cemerlang sepanjang tahun lalu apabila merangkul dua pingat emas dalam disiplin bola dan riben pada Sukan Komanwel di Birmingham dan dia turut memenangi gelaran Olahragawati Kebangsaan 2022.- UTUSAN\n' +
			'The post Erry dinobat Olahragawan, Joe Ee Olahragawati Wilayah Persekutuan appeared first on Utusan Malaysia.',
		'dc:creator': 'HAKIMI ISMAIL',
		content:
			'<div><img width="825" height="526" src="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1024x653.jpg" class="attachment-large size-large wp-post-image" alt="" loading="lazy" style="margin-bottom: 15px;" srcset="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1024x653.jpg 1024w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-600x383.jpg 600w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-768x490.jpg 768w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-250x160.jpg 250w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1536x980.jpg 1536w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-750x479.jpg 750w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1140x727.jpg 1140w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad.jpg 1600w" sizes="(max-width: 825px) 100vw, 825px" /></div>\n' +
			'<p><img width="1600" height="1021" src="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad.jpg 1600w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-600x383.jpg 600w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1024x653.jpg 1024w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-768x490.jpg 768w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-250x160.jpg 250w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1536x980.jpg 1536w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-750x479.jpg 750w, https://www.utusan.com.my/wp-content/uploads/2023/11/7c3785d5-4281-4740-8842-a489d44e85ad-1140x727.jpg 1140w" sizes="(max-width: 1600px) 100vw, 1600px" /></p>\n' +
			'<p>PUTRAJAYA: Jaguh angkat berat, Muhammad Erry Hidayat dan gimnas, Ng Joe Ee masing-masing dinobatkan sebagai Olahragawan dan Olahragawati Wilayah Persekutuan pada Majlis Anugerah Sukan Wilayah Persekutuan 2021/2022, malam ini. Kejayaan itu membolehkan Erry dan Joe Ee membawa pulang hadiah berupa piala pusingan, wang tunai RM8,000 dan juga barangan sukan bernilai RM1,000 yang disampaikan oleh Menteri ... <a title="Erry dinobat Olahragawan, Joe Ee Olahragawati Wilayah Persekutuan" class="read-more" href="https://www.utusan.com.my/sukan/2023/11/erry-dinobat-olahragawan-joe-ee-olahragawati-wilayah-persekutuan/" aria-label="More on Erry dinobat Olahragawan, Joe Ee Olahragawati Wilayah Persekutuan">Read more</a></p>\n' +
			'<p>The post <a rel="nofollow" href="https://www.utusan.com.my/sukan/2023/11/erry-dinobat-olahragawan-joe-ee-olahragawati-wilayah-persekutuan/">Erry dinobat Olahragawan, Joe Ee Olahragawati Wilayah Persekutuan</a> appeared first on <a rel="nofollow" href="https://www.utusan.com.my">Utusan Malaysia</a>.</p>\n',
		contentSnippet:
			'PUTRAJAYA: Jaguh angkat berat, Muhammad Erry Hidayat dan gimnas, Ng Joe Ee masing-masing dinobatkan sebagai Olahragawan dan Olahragawati Wilayah Persekutuan pada Majlis Anugerah Sukan Wilayah Persekutuan 2021/2022, malam ini. Kejayaan itu membolehkan Erry dan Joe Ee membawa pulang hadiah berupa piala pusingan, wang tunai RM8,000 dan juga barangan sukan bernilai RM1,000 yang disampaikan oleh Menteri ... Read more\n' +
			'The post Erry dinobat Olahragawan, Joe Ee Olahragawati Wilayah Persekutuan appeared first on Utusan Malaysia.',
		guid: 'https://www.utusan.com.my/?p=824145',
		categories: [
			'Gimnastik',
			'Lain-Lain',
			'SUKAN',
			'TERKINI',
			'top',
			'Olahragawan',
			'Olahragawati',
		],
		isoDate: '2023-11-28T14:43:32.000Z',
	},
];

const bhSampleResponse = [
	{
		creator: '',
		title: '\n\nOps Ihsan lancar kempen gelombang mega #PalestinMerdeka',
		link: 'https://www.bharian.com.my/berita/nasional/2023/11/1182913/ops-ihsan-lancar-kempen-gelombang-mega-palestinmerdeka',
		pubDate: 'Tue, 28 Nov 2023 23:02:48 +0800',
		'dc:creator': '',
		content:
			'\n' +
			'        KUALA LUMPUR: Ops Ihsan melancarkan kempen gelombang mega tanda pagar #PalestinMerdeka sempena Hari Solidariti Antarabangsa Bersama Rakyat Palestin yang ditetapkan Pertubuhan Bangsa-Bangsa Bersatu (PBB) pada 29 November setiap tahun.      \n' +
			'      ',
		contentSnippet:
			'KUALA LUMPUR: Ops Ihsan melancarkan kempen gelombang mega tanda pagar #PalestinMerdeka sempena Hari Solidariti Antarabangsa Bersama Rakyat Palestin yang ditetapkan Pertubuhan Bangsa-Bangsa Bersatu (PBB) pada 29 November setiap tahun.',
		guid: 'https://www.bharian.com.my/berita/nasional/2023/11/1182913/ops-ihsan-lancar-kempen-gelombang-mega-palestinmerdeka',
		isoDate: '2023-11-28T15:02:48.000Z',
	},
];

const saysSampleResponse = [
	{
		creator: 'Akmal Redzwan',
		title:
			'[VIDEO] Remaja 13 Tahun Berkopiah Tikam Pemandu E-Hailing Sebelum Lari Di Sungai Petani',
		link: 'https://says.com/my/seismik/remaja-13-tahun-berkopiah-dirakam-cuba-tikam-pemandu-e-hailing-ini-guna-pisau-sebelum-lari',
		pubDate: '2023-11-28 12:40:34 +0800',
		author: 'Akmal Redzwan',
		'content:encoded':
			'\n' +
			'              <p><i>Follow </i>kami di <a href="https://whatsapp.com/channel/0029VaBbaF87YSdB06RVh51U">WhatsApp Channels</a>, <a href="https://t.me/SAYSSeismik">Telegram</a>, <a href="https://www.instagram.com/saysseismik.ig/">Instagram</a> dan <a href="https://www.tiktok.com/@says.seismik?lang=en">TikTok</a> SAYS Seismik, jadi antara yang terawal untuk dapatkan berita serta artikel-artikel menarik.</p>\n' +
			'    <h1>Tular baru-baru ini seorang pemandu e-hailing terselamat daripada tercedera apabila seorang penumpang cuba menikamnya dengan sebilah pisau</h1>\n' +
			'      <p>Menerusi <i>posting</i> yang sedang <i>viral</i> pada ketika ini, difahamkan kejadian berkenaan berlaku di Lorong Teja 12 Taman Keladi, Sungai Petani, Kedah pada 27 November, Selasa, pukul 6.20 petang.</p>\n' +
			'\n' +
			'<p>Menurut laporan <a href="https://www.bharian.com.my/berita/kes/2023/11/1182538/remaja-berketayap-tikam-pemandu-e-hailing-ditahan-polis">Berita Harian</a>, hanya kerana tidak puas hati dimaki ketika mengambil semula wang tambang dipercayai menjadi punca menyebabkan seorang remaja lelaki berusia 13 tahun itu bertindak di luar kawalan dengan mengacu pisau di dada kiri pemandu kenderaan itu, semalam.</p>\n' +
			'\n' +
			'<p>Bagaimanapun pemandu e-hailing berusia 65 tahun itu sempat merampas pisau serta menggigit tangan remaja tersebut untuk mempertahankan diri kemudian suspek kemudian melarikan diri.</p>\n' +
			'      <p>\n' +
			'        <img src="https://images.says.com/uploads/story_source/source_image/1192898/29ee.jpg" />\n' +
			'        <figcaption>\n' +
			'          <cite>Image via Penduduk Sungai Petani Kedah (Facebook)</cite>\n' +
			'        </figcaption>\n' +
			'      </p>\n' +
			'    <h1>Remaja lelaki itu berjaya ditahan selepas dua jam laporan polis dibuat pemandu e-hailing</h1>\n' +
			'      <p>Ketua Polis Daerah Kuala Muda, Asisten Komisioner Zaidy Che Hassan berkata, berdasarkan laporan, warga emas terbabit menerima pesanan penumpang melalui aplikasi Grab pada jam 5.43 petang semalam untuk mengambil penumpang terbabit di Lorong Taman Keladi.<p>Beliau berkata, sewaktu dalam perjalanan ke Bandar Sri Astana, penumpang iaitu remaja lelaki terbabit meminta meminjam wang sebanyak RM50 untuk membayar sewa rumah.</p>\n' +
			'\n' +
			'<p><i>"Bagaimanapun pemandu itu memberitahu jika tiada wang, dia terpaksa menurunkan penumpang terbabit di lokasi berkenaan namun remaja terbabit enggan dan meminta membawanya ke rumah di Bandar Sri Astana untuk mengambil wang bagi membayar tambang itu.</i></p>\n' +
			'\n' +
			'<p><i>"Namun sampai di rumah berkenaan, remaja terbabit meminta membawanya semula ke Taman Keladi dan menerima bayaran sebanyak RM18 daripada remaja berkenaan dan turut melengahkannya kerana membawanya ke beberapa lorong kecil.</i></p>\n' +
			'\n' +
			'<p><i>"Pengadu terpaksa menurunkan penumpang itu di lokasi berkenaan dan meminta bayaran tambahan sebanyak RM9 dan penumpang itu memberikan wang RM20," </i>katanya dalam satu kenyataan hari ini.</p>\n' +
			'      <p>\n' +
			'        <img src="https://images.says.com/uploads/story_source/source_image/1192899/b2ed.jpg" />\n' +
			'        <figcaption>\n' +
			'          <cite>Image via Penduduk Sungai Petani Kedah (Facebook)</cite>\n' +
			'        </figcaption>\n' +
			'      </p>\n' +
			'      <p>Zaidy berkata, sewaktu pemandu itu mahu memulangkan baki wang, penumpang berkenaan mengacukan sebilah pisau ke dada kirinya dan mahu merampas wang dari poket pemandu namun warga emas itu sempat merampas pisau serta menggigit tangannya untuk mempertahankan diri kemudian suspek kemudian melarikan diri.<p>Berikutan itu, polis berjaya merampas sebilah pisau berhulu hitam berukuran 25 sentimeter (cm) dibawa remaja lelaki berkenaan yang ditinggalkan di tempat kejadian</p>\n' +
			'\n' +
			'<p><i>"Pemandu e-hailing itu bagaimanapun tidak mengalami sebarang kecederaan," </i>katanya.</p>\n' +
			'\n' +
			'<p>Zaidy berkata, hasil siasatan mendapati, remaja lelaki itu adalah anak sulung daripada empat beradik dan bukan di kalangan keluarga bermasalah.</p>\n' +
			'\n' +
			'<p>Beliau berkata, kejadian itu dipercayai berpunca disebabkan suspek marahkan pemandu terbabit kerana dimaki dan cuba ambil semula wang bayaran tambang menyebabkan dia bertindak demikian.</p>\n' +
			'\n' +
			'<p><i>"Selain itu terdapat rakaman melalui dashcam yang dipasang dalam kenderaan e-hailing berkenaan.</i></p>\n' +
			'\n' +
			'<p><i>"Remaja lelaki itu berjaya ditahan jam 10 malam tadi iaitu selepas dua jam laporan polis dibuat pemandu e-hailing itu pada jam 8 malam tadi.</i></p>\n' +
			'\n' +
			'<p><i>"Hasil ujian saringan awal air kencing terhadapnya mendapati remaja itu bebas dari pengaruh dadah dan tidak mempunyai sebarang rekod jenayah sebelum ini," </i>katanya.</p>\n' +
			'\n' +
			'<p>Jelas Zaidy lagi, kes tersebut kini disiasat mengikut Seksyen 393 Kanun Keseksaan dan remaja lelaki itu direman bermula hari ini untuk membantu siasatan.</p>\n' +
			'    <h1>Lihat video penuh di bawah:</h1>\n' +
			'        <p>\n' +
			'          <div style="width:100%;height:0px;position:relative;padding-bottom:57.508%;"><iframe src="https://streamable.com/e/kanij6" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>\n' +
			'        </p>\n' +
			'    <h1><em>Like</em> <a href="https://www.facebook.com/SAYSSeismik" target="_blank">Facebook</a>, <em>follow</em> <a href="https://twitter.com/saysseismik" target="_blank">Twitter</a> dan <a href="https://www.instagram.com/saysseismik.ig/" target="_blank">Instagram</a> SAYS Seismik serta temui segala cerita &#39;mesti kongsi&#39; sekarang!</h1>\n' +
			'      <p>\n' +
			'        <img src="https://images.says.com/uploads/story_source/source_image/1192870/99b2.png" />\n' +
			'        <figcaption>\n' +
			'          <cite>Image via SAYS Seismik</cite>\n' +
			'        </figcaption>\n' +
			'      </p>\n' +
			'    <h1>Baca lagi artikel menarik lain hanya di SAYS Seismik:</h1>\n' +
			'\n' +
			'      ',
		'content:encodedSnippet':
			'Follow kami di WhatsApp Channels, Telegram, Instagram dan TikTok SAYS Seismik, jadi antara yang terawal untuk dapatkan berita serta artikel-artikel menarik.\n' +
			'Tular baru-baru ini seorang pemandu e-hailing terselamat daripada tercedera apabila seorang penumpang cuba menikamnya dengan sebilah pisau\n' +
			'Menerusi posting yang sedang viral pada ketika ini, difahamkan kejadian berkenaan berlaku di Lorong Teja 12 Taman Keladi, Sungai Petani, Kedah pada 27 November, Selasa, pukul 6.20 petang.\n' +
			'Menurut laporan Berita Harian, hanya kerana tidak puas hati dimaki ketika mengambil semula wang tambang dipercayai menjadi punca menyebabkan seorang remaja lelaki berusia 13 tahun itu bertindak di luar kawalan dengan mengacu pisau di dada kiri pemandu kenderaan itu, semalam.\n' +
			'Bagaimanapun pemandu e-hailing berusia 65 tahun itu sempat merampas pisau serta menggigit tangan remaja tersebut untuk mempertahankan diri kemudian suspek kemudian melarikan diri.\n' +
			'Image via Penduduk Sungai Petani Kedah (Facebook)\n' +
			'        \n' +
			'      \n' +
			'Remaja lelaki itu berjaya ditahan selepas dua jam laporan polis dibuat pemandu e-hailing\n' +
			'Ketua Polis Daerah Kuala Muda, Asisten Komisioner Zaidy Che Hassan berkata, berdasarkan laporan, warga emas terbabit menerima pesanan penumpang melalui aplikasi Grab pada jam 5.43 petang semalam untuk mengambil penumpang terbabit di Lorong Taman Keladi.\n' +
			'Beliau berkata, sewaktu dalam perjalanan ke Bandar Sri Astana, penumpang iaitu remaja lelaki terbabit meminta meminjam wang sebanyak RM50 untuk membayar sewa rumah.\n' +
			'"Bagaimanapun pemandu itu memberitahu jika tiada wang, dia terpaksa menurunkan penumpang terbabit di lokasi berkenaan namun remaja terbabit enggan dan meminta membawanya ke rumah di Bandar Sri Astana untuk mengambil wang bagi membayar tambang itu.\n' +
			'"Namun sampai di rumah berkenaan, remaja terbabit meminta membawanya semula ke Taman Keladi dan menerima bayaran sebanyak RM18 daripada remaja berkenaan dan turut melengahkannya kerana membawanya ke beberapa lorong kecil.\n' +
			'"Pengadu terpaksa menurunkan penumpang itu di lokasi berkenaan dan meminta bayaran tambahan sebanyak RM9 dan penumpang itu memberikan wang RM20," katanya dalam satu kenyataan hari ini.\n' +
			'Image via Penduduk Sungai Petani Kedah (Facebook)\n' +
			'        \n' +
			'      \n' +
			'Zaidy berkata, sewaktu pemandu itu mahu memulangkan baki wang, penumpang berkenaan mengacukan sebilah pisau ke dada kirinya dan mahu merampas wang dari poket pemandu namun warga emas itu sempat merampas pisau serta menggigit tangannya untuk mempertahankan diri kemudian suspek kemudian melarikan diri.\n' +
			'Berikutan itu, polis berjaya merampas sebilah pisau berhulu hitam berukuran 25 sentimeter (cm) dibawa remaja lelaki berkenaan yang ditinggalkan di tempat kejadian\n' +
			'"Pemandu e-hailing itu bagaimanapun tidak mengalami sebarang kecederaan," katanya.\n' +
			'Zaidy berkata, hasil siasatan mendapati, remaja lelaki itu adalah anak sulung daripada empat beradik dan bukan di kalangan keluarga bermasalah.\n' +
			'Beliau berkata, kejadian itu dipercayai berpunca disebabkan suspek marahkan pemandu terbabit kerana dimaki dan cuba ambil semula wang bayaran tambang menyebabkan dia bertindak demikian.\n' +
			'"Selain itu terdapat rakaman melalui dashcam yang dipasang dalam kenderaan e-hailing berkenaan.\n' +
			'"Remaja lelaki itu berjaya ditahan jam 10 malam tadi iaitu selepas dua jam laporan polis dibuat pemandu e-hailing itu pada jam 8 malam tadi.\n' +
			'"Hasil ujian saringan awal air kencing terhadapnya mendapati remaja itu bebas dari pengaruh dadah dan tidak mempunyai sebarang rekod jenayah sebelum ini," katanya.\n' +
			'Jelas Zaidy lagi, kes tersebut kini disiasat mengikut Seksyen 393 Kanun Keseksaan dan remaja lelaki itu direman bermula hari ini untuk membantu siasatan.\n' +
			'Lihat video penuh di bawah:\n' +
			'\n' +
			"Like Facebook, follow Twitter dan Instagram SAYS Seismik serta temui segala cerita 'mesti kongsi' sekarang!\n" +
			'Image via SAYS Seismik\n' +
			'        \n' +
			'      \n' +
			'Baca lagi artikel menarik lain hanya di SAYS Seismik:',
		content:
			'Pemandu e-hailing itu bagaimanapun tidak mengalami sebarang kecederaan.',
		contentSnippet:
			'Pemandu e-hailing itu bagaimanapun tidak mengalami sebarang kecederaan.',
		guid: '66032',
		categories: ['SEISMIK'],
		isoDate: '2023-11-28T04:40:34.000Z',
	},
];
