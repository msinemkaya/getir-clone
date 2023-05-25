import Container from './Container';
import FooterCols from './FooterCols';

export default function Footer({  }){

  const cols = [
    {
      title: 'Getiri indirin!',
      imgs: [
        {
          to: '#',
          img: 'https://getir.uk/_next/image/?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fappstore_uk2_16f9069b07.png&w=256&q=75'
        },
        {
          to: '#',
          img: 'https://getir.uk/_next/image/?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fplaystore_uk2_3be356f52c.svg&w=256&q=75'
        },
      ]
    },

    {
      title: 'Getiri keşfedin',
      links: [
        {
          to: '#',
          text: 'Hakkımızda',
        },
        {
          to: '#',
          text: 'Kariyer',
        },
        {
          to: '#',
          text: 'İletişim',
        },
        {
          to: '#',
          text: 'Sosyal sorumluluk projeleri',
        },
      ]
    },

    {
      title: 'Yardıma mı ihtiyacınız var?',
      links: [
        {
          to: '#',
          text: 'Sıkça sorulan sorular',
        },
        {
          to: '#',
          text: 'Kişisel verilerin korunması',
        },
        {
          to: '#',
          text: 'Gizlilik politikası',
        },
        {
          to: '#',
          text: 'Kullanım koşulları',
        },
      ]
    },

    {
      title: 'İş ortağımız olun',
      links: [
        {
          to: '#',
          text: 'bayimiz olun',
        },
        {
          to: '#',
          text: 'deponuzu kiralayın',
        },
        {
          to: '#',
          text: 'getir yemek restoranı olun',
        },
        {
          to: '#',
          text: 'GetirÇarşı işletmesi olun',
        },
      ]
    },
  ]

  return(
    <div className='bg-white'>
      <Container>
        <div className='grid grid-cols-4 p-6 gap-4'>
          {cols.map(col => (
            <FooterCols col={col}/>
          ))}
        </div>
      </Container>
    </div>
  );
}