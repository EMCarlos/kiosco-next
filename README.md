# Food Ordering System

A modern food ordering web application built with Next.js 15, TypeScript, Prisma, and ZOD. This application allows users to browse food categories, view products, and place orders with customization options.

## 🚀 Features

- **Category-based Navigation**: Browse products by categories
- **Responsive Design**: Fully responsive grid layout that adapts to different screen sizes
- **Dark/Light Mode**: Built-in theme support with CSS variables
- **Real-time Updates**: Loading states and smooth transitions
- **Product Customization**: Allows users to personalize their orders

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Image Handling**: Next.js Image Optimization
- **State Management**: React Hooks

## 🌐 URLs

- `/`: Home page with main menu and categories
- `/order/[category]`: Products listing by category
  - `/order/cafe`
  - `/order/hamburguesa`
  - `/order/pizza`
  - `/order/dona`
  - `/order/pastel`
  - `/order/galletas`
- `/admin/products`: Admin page with products list
- `/admin/orders`: Admin page with uncompleted orders
- `/orders`: Order history and tracking

Example URLs:

```bash
https://kiosco-next-six.vercel.app/order/cafe
https://kiosco-next-six.vercel.app/admin/products
https://kiosco-next-six.vercel.app/admin/orders
```

---

## 📦 Project Structure

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
