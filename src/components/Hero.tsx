import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Lending {' '}
        <span className="relative whitespace-nowrap text-red-600" style={{ textEmphasisColor: "#e42e67" }}>
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-red-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">made simple</span>
        </span>{' '}
        for communities.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Your friends and family are your first real help when you need a quick loan. They trust you and may offer better terms and conditions.
      </p>
      <div className="mt-10 flex justify-center gap-x-6 ">
        <Button className='bg-red-600' href="/register">Gain early access</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-red-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by
        </p>

        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <li>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.6364 39V49.6364H7.09091V39H0V49.6364C0 53.5364 3.19091 56.7273 7.09091 56.7273H49.6364C53.5364 56.7273 56.7273 53.5364 56.7273 49.6364V39H49.6364ZM46.0909 24.8182L41.0918 19.8191L31.9091 28.9664V0H24.8182V28.9664L15.6355 19.8191L10.6364 24.8182L28.3636 42.5455L46.0909 24.8182Z" fill="#21214F" />
              </svg>
              <p className='mt-5 text-red-600 font-bold'>590</p>
              <p>Downloads</p>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg width="78" height="56" viewBox="0 0 78 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.8182 35V7C63.8182 3.15 60.6273 0 56.7273 0H7.09091C3.19091 0 0 3.15 0 7V35C0 38.85 3.19091 42 7.09091 42H56.7273C60.6273 42 63.8182 38.85 63.8182 35ZM56.7273 35H7.09091V7H56.7273V35ZM31.9091 10.5C26.0236 10.5 21.2727 15.19 21.2727 21C21.2727 26.81 26.0236 31.5 31.9091 31.5C37.7945 31.5 42.5455 26.81 42.5455 21C42.5455 15.19 37.7945 10.5 31.9091 10.5ZM78 10.5V49C78 52.85 74.8091 56 70.9091 56H10.6364C10.6364 52.5 10.6364 52.85 10.6364 49H70.9091V10.5C74.8091 10.5 74.4545 10.5 78 10.5Z" fill="#21214F" />
              </svg>
              <p className='mt-5 text-red-600 font-bold'>1,002</p>
              <p>Loans given</p>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg width="78" height="73" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.09115 10.6364C7.09115 8.68636 8.68661 7.09091 10.6366 7.09091H17.7275V0H10.6366C4.75115 0 0.000244141 4.75091 0.000244141 10.6364V17.7273H7.09115V10.6364Z" fill="#21214F" />
                <path d="M7.09091 67.3636V60.2727H0V67.3636C0 73.2491 4.75091 78 10.6364 78H17.7273V70.9091H10.6364C8.68636 70.9091 7.09091 69.3136 7.09091 67.3636Z" fill="#21214F" />
                <path d="M67.3636 0H60.2727V7.09091H67.3636C69.3136 7.09091 70.9091 8.68636 70.9091 10.6364V17.7273H78V10.6364C78 4.75091 73.2491 0 67.3636 0Z" fill="#21214F" />
                <path d="M70.9091 67.3636C70.9091 69.3136 69.3136 70.9091 67.3636 70.9091H60.2727V78H67.3636C73.2491 78 78 73.2491 78 67.3636V60.2727H70.9091V67.3636Z" fill="#21214F" />
                <path d="M63.8182 49.1754V28.8245C63.8182 26.2718 62.471 23.9318 60.2728 22.6909L42.5455 12.48C41.4464 11.8418 40.241 11.5227 39.0001 11.5227C37.7592 11.5227 36.5537 11.8418 35.4546 12.48L17.7273 22.6554C15.5292 23.9318 14.1819 26.2718 14.1819 28.8245V49.1754C14.1819 51.7282 15.5292 54.0682 17.7273 55.3091L35.4546 65.52C36.5537 66.1582 37.7592 66.4772 39.0001 66.4772C40.241 66.4772 41.4464 66.1582 42.5455 65.52L60.2728 55.3091C62.471 54.0682 63.8182 51.7282 63.8182 49.1754ZM35.4546 57.33L21.2728 49.1754V32.76L35.4546 41.0209V57.33ZM39.0001 34.8873L24.9601 26.6972L39.0001 18.6136L53.0401 26.6972L39.0001 34.8873ZM56.7273 49.1754L42.5455 57.33V41.0209L56.7273 32.76V49.1754Z" fill="#21214F" />
              </svg>
              <p className=' text-red-600 font-bold'>39</p>
              <p>Groups created</p>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.0909 28.3636C46.0909 26.4136 47.6864 24.8182 49.6364 24.8182C51.5864 24.8182 53.1818 26.4136 53.1818 28.3636C53.1818 30.3136 51.5864 31.9091 49.6364 31.9091C47.6864 31.9091 46.0909 30.3136 46.0909 28.3636ZM21.2727 24.8182H39V17.7273H21.2727V24.8182ZM70.9091 19.5V44.2118L60.9109 47.5445L54.9545 67.3636H35.4545V60.2727H28.3636V67.3636H8.86364C8.86364 67.3636 0 37.3691 0 26.5909C0 15.8127 8.72182 7.09091 19.5 7.09091H37.2273C40.4536 2.80091 45.5945 0 51.4091 0C54.3518 0 56.7273 2.37545 56.7273 5.31818C56.7273 6.06273 56.5854 6.73636 56.3018 7.37455C55.8055 8.58 55.38 9.96273 55.1673 11.4518L63.2155 19.5H70.9091ZM63.8182 26.5909H60.2727L47.8636 14.1818C47.8636 11.8773 48.1827 9.60818 48.7855 7.41C45.3464 8.29636 42.5455 10.8491 41.3755 14.1818H19.5C12.6573 14.1818 7.09091 19.7482 7.09091 26.5909C7.09091 33.2564 11.4164 50.1682 14.2173 60.2727H21.2727V53.1818H42.5455V60.2727H49.6718L55.1673 42.0136L63.8182 39.1064V26.5909Z" fill="#21214F" />
              </svg>
              <p className='mt-1 text-red-600 font-bold'>372</p>
              <p>Fundraisers supported</p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  )
}
