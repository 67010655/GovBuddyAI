# 📱 GovBuddy AI — Mobile Web App

> **CDG Hackathon 2026**
> ผู้ช่วยอัจฉริยะที่ช่วยประชาชนเตรียมตัวก่อนติดต่อบริการรัฐ จาก *"ไม่รู้ต้องเริ่มตรงไหน"* → *"รู้ว่าต้องทำอะไรต่อ"*

---

## 🌟 ฟีเจอร์หลัก (Key Features)

1. **Explore & Select (ค้นหาและเลือกบริการ)** — ค้นหาหน่วยงานราชการหรือบริการที่ต้องการด้วยภาษาธรรมชาติ
2. **Guided Questioning (ถามข้อมูลเฉพาะบุคคล)** — AI ถามเงื่อนไขเพิ่มเติม (เช่น อายุ, รถกี่ปี, สิทธิ์การรักษา) เพื่อคัดกรองเอกสารเฉพาะบุคคล
3. **Action Plan & Interactive Checklist** — สรุปรายการเอกสารที่ต้องใช้, ค่าใช้จ่าย, เวลาดำเนินการ, จุดติดต่อ พร้อมปุ่มติ๊กถูกบันทึกสถานะได้จริง
4. **🗣️ สิ่งที่ควรแจ้งเจ้าหน้าที่** — สคริปต์ประโยคคำพูดสำหรับแจ้งเจ้าหน้าที่เมื่อไปถึงจุดบริการ
5. **Interactive AI Chat & Source Citation** — แชตถาม-ตอบข้อสงสัยเพิ่มเติม พร้อมลิงก์แสดงแหล่งอ้างอิงทางการจากภาครัฐ

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend**: Vite + Vanilla JavaScript (SPA)
- **Styling**: Modern Vanilla CSS (Design System + Mobile-First Responsive Layout)
- **Data Model**: Static JSON Knowledge Base (กรมการขนส่งทางบก DLT + โรงพยาบาลรัฐ)
- **Deployment**: GitHub Pages / Netlify / Vercel

---

## 💻 วิธีการรันในเครื่อง (Local Setup)

```bash
# 1. Clone repository
git clone https://github.com/67010655/GovBuddyAI.git
cd GovBuddyAI

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Access on Mobile / Local Network
npx vite --host
```

---

## 📄 แผนงานออกแบบระบบ (System Architecture)
ดูรายละเอียดการออกแบบระบบได้ที่ [implementation_plan.md](./implementation_plan.md)
