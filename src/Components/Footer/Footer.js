import './Footer.scss'
const Footer = () => {
  return (
    <>
      <div className='footer-wrapper'>
        <div className='mobile-app'>
          <div className='mobile-img'></div>
          <div className='QR-app-wrapper'>
            <div className='QR-wrapper'>
              <div className='QR-CODE'></div>
              <div className='QR-text-area'>
                <div className='QR-header'>LoremIpsum Mobil Uygulamayı İndirin.</div>
                <div className='QR-text'>Mobil Uygulamayı QR Kod ile İndirin.</div>
              </div>

            </div>
            <div className='app-wrapper'>
              <div className='play-store'></div>
              <div className='app-store'></div>
            </div>

          </div>

        </div>

      </div>

      <div className='footer-last'>
        <div className='social-media-wrapper'>
          <div className='footer-company-logo'></div>
          <div className='social-media'>
            <a href='#/' className='facebook'> </a>
            <a href='#/' className='twitter'> </a>
            <a href='#/' className='instagram'> </a>
            <a href='#/' className='youtube'> </a>
          </div>
          <div className='footer-personal-data-info'>
            LoremIpsum olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan ulaşabilirsiniz.
          </div>
        </div>

        <div className='company-info'>
          <div className='company-info-wrapper'>
            <div className='useful information'>
              <h4>Faydalı Bilgiler</h4>
              <a href='#/'>Ürün Bakımı</a>
              <a href='#/'>Ürün Eşliğinde Notlar</a>
              <a href='#/'>Ürün Anlamları</a>
              <a href='#/'>Özel Günler</a>
              <a href='#/'>Mevsimlere Göre Ürün</a>
              <a href='#/'>Ürün Saklama Koşulları</a>
              <a href='#/'>Site Haritası</a>
            </div>
            <div className='corporate'>
              <h4>Kurumsal</h4>
              <a href='#/'>Hakkımızda</a>
              <a href='#/'>Kariyer</a>
              <a href='#/'>Kurumsal Müşterilerimiz</a>
              <a href='#/'>Reklamlarımız</a>
              <a href='#/'>Basında Biz</a>
              <a href='#/'>Kampanyalar</a>
              <a href='#/'>Vizyonumuz</a>
            </div>
            <div className='contact'>
              <h4>İletişim</h4>
              <a href='#/'>Bize Ulaşın</a>
              <a href='#/'>Sıkça Sorulan Sorular</a>
            </div>
            <div className='confidentiality-agreement'>
              <h4>Gizlilik Sözleşmesi</h4>
              <a href='#/'>Mesafeli Satış Sözleşmesi</a>
              <a href='#/'>Bilgi Toplumu Hizmetleri</a>
              <a href='#/'>Gizlilik Sözleşmesi</a>
              <a href='#/'>Ödeme Seçenekleri</a>
              <a href='#/'>Hesap Bilgileri</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer