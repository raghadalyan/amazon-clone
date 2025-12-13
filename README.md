# Amazon Product Page Clone

## 📌 Project Overview

This project is a **front-end clone of an Amazon product page**, created as part of a **Full-Stack course exercise**.
The goal of the task was to recreate the **layout, spacing, and visual structure** of a real Amazon product page using **HTML and CSS only**, while closely matching Amazon’s UI.

The project focuses on **page organization, layout accuracy, and styling**, rather than functionality.

---

## 🔗 How to View the Project

To view the project, simply open:

```
index.html
```

This file is the main entry point and loads all sections of the page using iframes.

---

## 🔍 Reference Page

The clone is based on the following Amazon product page:

[https://www.amazon.com/SHEGLAM-Liquid-Makeup-Cheeks-Finish/dp/B0D3CJYJCC](https://www.amazon.com/SHEGLAM-Liquid-Makeup-Cheeks-Finish/dp/B0D3CJYJCC)

> ⚠ **Note:**
> Amazon frequently updates and experiments with its page layout, content, and design.
> Therefore, some elements on the live Amazon page may differ slightly from this clone depending on when the page is viewed.

---

## 🧩 Page Structure

The page is modular and divided into multiple sections, each implemented separately and loaded via iframes:

* **Header & Sub-Navigation** – Amazon-style top navigation bar
* **Advertisement Bar** – Promotional section under the header
* **Main Product Content**

  * Product images and thumbnails
  * Product details section
  * Share section
  * Buy Box
* **Frequently Bought Together** section
* **Products Related to This Item** section (7 products displayed)

---

## ✨ Implemented Features

* Amazon-style **header and navigation**
* Product image gallery with thumbnails
* Fully styled **Buy Box**
* “Frequently Bought Together” layout
* “Products related to this item” section:

  * Exactly **7 visible products**
  * Space evenly distributed using **CSS Grid**
  * Navigation arrows are **visual only (no JavaScript behavior)**
* Amazon-style **tab title and favicon**
* Responsive layout for smaller screen sizes

---

## 🛠 Technologies Used

* **HTML5**
* **CSS3**

---

## 📁 Project Structure

```
ex1/
│
├── index.html
├── style.css
├── header.html
├── ad.html
│
├── Content/
│   ├── content.html
│   ├── content.css
│
├── buybox/
│   ├── buybox.html
│   ├── buybox.css
│
├── fbt/
│   ├── fbt.html
│   ├── fbt.css
│
├── related/
│   ├── related.html
│   ├── related.css
│
└── img/
    ├── amazon.png
    ├── product images...
```

---

## ⚠ Limitations

* This is a **static UI clone** only.
* No backend, cart functionality, or real Amazon data.
* Navigation arrows are intentionally disabled (UI only).
* Browser tab tooltip behavior is controlled by the browser and cannot be fully customized.




