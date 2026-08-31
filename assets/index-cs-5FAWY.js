(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={};function t(t,n){e[t]=n}function n(e,t={}){let n={path:e,params:t};window.history.pushState(n,``,`#${e}`),r(e,t)}function r(t,n={}){let r=e[t]||e[`/`];r&&r(n)}window.addEventListener(`popstate`,e=>{e.state?r(e.state.path,e.state.params):r(`/`)});function i(){r(window.location.hash.slice(1)||`/`)}var a=[{id:`transport`,name:`การขนส่ง`,icon:`🚗`,color:`var(--color-cat-transport)`,enabled:!0},{id:`health`,name:`สาธารณสุข`,icon:`🏥`,color:`var(--color-cat-health)`,enabled:!0},{id:`finance`,name:`การเงิน`,icon:`💰`,color:`var(--color-cat-finance)`,enabled:!1},{id:`welfare`,name:`สวัสดิการ`,icon:`🤝`,color:`var(--color-cat-welfare)`,enabled:!1},{id:`education`,name:`การศึกษา`,icon:`📚`,color:`var(--color-cat-education)`,enabled:!1},{id:`document`,name:`รับรองเอกสาร`,icon:`📋`,color:`var(--color-cat-document)`,enabled:!1},{id:`patent`,name:`สิทธิบัตร`,icon:`📜`,color:`var(--color-cat-patent)`,enabled:!1},{id:`other`,name:`อื่นๆ`,icon:`🔍`,color:`var(--color-cat-other)`,enabled:!1}],o=[{id:`dlt`,name:`กรมการขนส่งทางบก`,shortName:`ขนส่ง`,icon:`🚗`,color:`#2D7FF9`,bgColor:`#E3EDFF`,categoryId:`transport`,description:`ใบขับขี่, ทะเบียนรถ, โอนกรรมสิทธิ์`,hotline:`1584`,website:`https://www.dlt.go.th`,queueSystem:{name:`DLT Smart Queue`,url:`https://gecc.dlt.go.th/dlt-queue/`}},{id:`hospital`,name:`โรงพยาบาลรัฐ`,shortName:`โรงพยาบาล`,icon:`🏥`,color:`#10B981`,bgColor:`#ECFDF5`,categoryId:`health`,description:`นัดพบแพทย์, ขอใบรับรอง, เบิกสิทธิ์`,hotline:`1330`,website:`https://www.nhso.go.th`,queueSystem:{name:`ระบบนัดหมายออนไลน์`,url:null}}],s={dlt:[{id:`dlt-new-license`,agencyId:`dlt`,name:`ทำใบขับขี่ใหม่`,icon:`🪪`,description:`สำหรับผู้ที่ต้องการทำใบอนุญาตขับรถยนต์ส่วนบุคคลชั่วคราว (2 ปี) เป็นครั้งแรก`,category:`ใบขับขี่`,estimatedTime:`45–60 นาที`,estimatedProcessDays:`ได้รับภายในวันเดียว`,estimatedCost:`505 บาท`,costBreakdown:[{item:`ค่าธรรมเนียมใบขับขี่`,amount:`205 บาท`},{item:`ค่าสอบข้อเขียน`,amount:`100 บาท`},{item:`ค่าสอบปฏิบัติ`,amount:`200 บาท`}],location:`สำนักงานขนส่งจังหวัด/สาขา ทั่วประเทศ`,locationNote:`เลือกสาขาใกล้บ้าน หรือจองคิวออนไลน์ล่วงหน้า`,operatingHours:`จันทร์–ศุกร์ 08:00–15:30 น.`,documents:[{name:`บัตรประชาชนตัวจริง`,note:`ยังไม่หมดอายุ`,isConditional:!1},{name:`ใบรับรองแพทย์`,note:`ออกไม่เกิน 1 เดือน`,isConditional:!1},{name:`รูปถ่าย 1 นิ้ว จำนวน 2 รูป`,note:`บางสาขาถ่ายที่จุดบริการได้`,isConditional:!1}],preparation:[{name:`จองคิวผ่าน DLT Smart Queue`,note:`จองล่วงหน้าอย่างน้อย 1 วัน`,link:`https://gecc.dlt.go.th/dlt-queue/`},{name:`อบรม e-Learning ล่วงหน้า`,note:`อบรมออนไลน์ 5 ชม. ไม่ต้องมาที่ขนส่ง`,link:`https://www.dlt-elearning.com`},{name:`ตรวจสอบเวลาทำการ`,note:`ตรวจสอบว่าสาขาเปิดให้บริการ`}],steps:[`จองคิวผ่าน DLT Smart Queue ล่วงหน้า`,`ยื่นเอกสารที่เคาน์เตอร์`,`ทดสอบสมรรถภาพร่างกาย (สายตา, สี, ปฏิกิริยา)`,`อบรมภาคทฤษฎี 5 ชั่วโมง (หรือแสดงหลักฐาน e-Learning)`,`สอบข้อเขียน 50 ข้อ (ผ่าน 45 ข้อ)`,`สอบขับรถจริงในสนามสอบ`,`ถ่ายรูป ชำระค่าธรรมเนียม รับใบขับขี่`],tips:[`จองคิวผ่าน DLT Smart Queue ล่วงหน้า จะได้ไม่ต้องรอนาน`,`อบรม e-Learning ออนไลน์ล่วงหน้าได้ ไม่ต้องมาอบรมที่ขนส่ง`,`มาถึงก่อนเวลานัดอย่างน้อย 30 นาที`,`แต่งกายสุภาพ ไม่สวมรองเท้าแตะ`],officerScripts:[`แจ้งที่ช่องประชาสัมพันธ์: "มาทำใบขับขี่รถยนต์ส่วนบุคคลใหม่ จองคิวล่วงหน้าแล้ว"`,`แจ้งจุดยื่นเอกสาร: "ยื่นบัตรประชาชน ใบรับรองแพทย์ และผลการอบรม e-Learning"`,`แจ้งจุดสอบปฏิบัติ: "มาสอบขับรถยนต์ท่าถอยเข้าซ้าย และเทียบฟุตบาท"`],sources:[{title:`กรมการขนส่งทางบก`,url:`https://www.dlt.go.th`},{title:`DLT Smart Queue`,url:`https://gecc.dlt.go.th/dlt-queue/`}],guidedQuestions:[{id:`licenseType`,question:`คุณต้องการทำใบขับขี่ประเภทไหน?`,options:[`รถยนต์ส่วนบุคคล`,`รถจักรยานยนต์`,`รถสาธารณะ`]},{id:`hasTraining`,question:`คุณเคยผ่านการอบรมจากโรงเรียนสอนขับรถที่ได้รับการรับรองหรือไม่?`,options:[`เคย — มีใบรับรอง`,`ยังไม่เคย`]},{id:`hasAppointment`,question:`คุณจองคิวผ่าน DLT Smart Queue แล้วหรือยัง?`,options:[`จองแล้ว`,`ยังไม่ได้จอง`,`ไม่รู้จักระบบนี้`]}]},{id:`dlt-renew-license`,agencyId:`dlt`,name:`ต่ออายุใบขับขี่`,icon:`🔄`,description:`ต่ออายุใบอนุญาตขับรถยนต์ส่วนบุคคล จากชั่วคราว (2 ปี) เป็น 5 ปี หรือต่อ 5 ปี เป็น 5 ปี`,category:`ใบขับขี่`,estimatedTime:`30–45 นาที`,estimatedProcessDays:`ได้รับภายในวันเดียว`,estimatedCost:`505 บาท`,costBreakdown:[{item:`ค่าธรรมเนียมต่ออายุ`,amount:`505 บาท`}],location:`สำนักงานขนส่งจังหวัด/สาขา ทั่วประเทศ`,locationNote:`ต่ออายุล่วงหน้าได้ 90 วันก่อนหมดอายุ`,operatingHours:`จันทร์–ศุกร์ 08:00–15:30 น.`,documents:[{name:`บัตรประชาชนตัวจริง`,note:`ยังไม่หมดอายุ`,isConditional:!1},{name:`ใบขับขี่เดิม`,note:`ตัวจริง`,isConditional:!1},{name:`ใบรับรองแพทย์`,note:`ออกไม่เกิน 1 เดือน`,isConditional:!1}],preparation:[{name:`จองคิวผ่าน DLT Smart Queue`,note:`จองล่วงหน้า`,link:`https://gecc.dlt.go.th/dlt-queue/`},{name:`อบรมออนไลน์ผ่าน DLT e-Learning`,note:`อบรม 1–2 ชม. ตามประเภท`,link:`https://www.dlt-elearning.com`}],steps:[`จองคิวผ่าน DLT Smart Queue`,`ยื่นเอกสารที่เคาน์เตอร์`,`ทดสอบสมรรถภาพร่างกาย`,`อบรม 1–2 ชั่วโมง (หรือแสดงหลักฐาน e-Learning)`,`ถ่ายรูป ชำระค่าธรรมเนียม รับใบขับขี่ใหม่`],tips:[`ต่ออายุล่วงหน้าได้ 90 วันก่อนหมดอายุ ไม่ต้องรอให้หมดก่อน`,`ถ้าหมดอายุเกิน 1 ปี ต้องสอบข้อเขียนใหม่`,`ถ้าหมดอายุเกิน 3 ปี ต้องสอบข้อเขียน + สอบขับ`],sources:[{title:`กรมการขนส่งทางบก`,url:`https://www.dlt.go.th`}],guidedQuestions:[{id:`currentLicenseType`,question:`ใบขับขี่ปัจจุบันของคุณเป็นประเภทอะไร?`,options:[`ชั่วคราว (2 ปี) → ต่อเป็น 5 ปี`,`5 ปี → ต่อเป็น 5 ปี`,`หมดอายุแล้ว`]},{id:`expiredDuration`,question:`ใบขับขี่หมดอายุมานานเท่าไหร่?`,options:[`ยังไม่หมดอายุ`,`หมดไม่เกิน 1 ปี`,`หมดเกิน 1 ปี แต่ไม่เกิน 3 ปี`,`หมดเกิน 3 ปี`]}]},{id:`dlt-vehicle-reg`,agencyId:`dlt`,name:`ต่อทะเบียนรถยนต์`,icon:`📋`,description:`ชำระภาษีรถยนต์ประจำปี และต่อทะเบียนรถยนต์`,category:`ทะเบียนรถ`,estimatedTime:`20–30 นาที`,estimatedProcessDays:`ได้รับภายในวันเดียว`,estimatedCost:`ตามประเภทรถ + พ.ร.บ.`,location:`สำนักงานขนส่ง หรือจุดบริการ เช่น ห้างสรรพสินค้า, ธนาคาร`,operatingHours:`จันทร์–ศุกร์ 08:00–15:30 น.`,documents:[{name:`สมุดคู่มือจดทะเบียนรถ`,note:`ตัวจริง`,isConditional:!1},{name:`พ.ร.บ. คุ้มครองผู้ประสบภัยจากรถ`,note:`ยังไม่หมดอายุ`,isConditional:!1},{name:`ใบตรวจสภาพรถ (ตรอ.)`,note:`สำหรับรถอายุเกิน 7 ปี`,isConditional:!0,condition:`รถอายุเกิน 7 ปี`}],preparation:[{name:`ตรวจสอบว่ารถต้องตรวจสภาพหรือไม่`,note:`รถอายุเกิน 7 ปี ต้องตรวจ ตรอ. ก่อน`},{name:`ซื้อ พ.ร.บ. ล่วงหน้า`,note:`ซื้อผ่านตัวแทนประกันหรือร้านสะดวกซื้อ`}],steps:[`เตรียมเอกสาร (สมุดทะเบียน + พ.ร.บ.)`,`ตรวจสภาพรถที่ ตรอ. (ถ้ารถเกิน 7 ปี)`,`ยื่นเอกสารที่เคาน์เตอร์ หรือทำออนไลน์`,`ชำระภาษีรถประจำปี`,`รับป้ายภาษี (สติกเกอร์)`],tips:[`สามารถชำระภาษีรถออนไลน์ได้ผ่านเว็บ https://eservice.dlt.go.th/`,`ต่อได้ล่วงหน้า 90 วันก่อนครบกำหนด`,`ถ้ารถไม่เกิน 7 ปี ไม่ต้องตรวจสภาพ`],sources:[{title:`กรมการขนส่งทางบก`,url:`https://www.dlt.go.th`}],guidedQuestions:[{id:`vehicleAge`,question:`รถของคุณจดทะเบียนมากี่ปีแล้ว?`,options:[`ไม่เกิน 7 ปี`,`เกิน 7 ปี`,`ไม่แน่ใจ`]},{id:`hasPRB`,question:`คุณมี พ.ร.บ. (ประกันภัยภาคบังคับ) ที่ยังไม่หมดอายุหรือไม่?`,options:[`มี ยังไม่หมดอายุ`,`หมดอายุแล้ว / ยังไม่ได้ต่อ`,`ไม่แน่ใจ`]}]},{id:`dlt-transfer`,agencyId:`dlt`,name:`โอนกรรมสิทธิ์รถ`,icon:`🔁`,description:`โอนกรรมสิทธิ์รถยนต์จากเจ้าของเดิมเป็นเจ้าของใหม่`,category:`ทะเบียนรถ`,estimatedTime:`1–2 ชั่วโมง`,estimatedProcessDays:`ได้รับภายในวันเดียว`,estimatedCost:`ประมาณ 400–800 บาท`,location:`สำนักงานขนส่งจังหวัดที่จดทะเบียน`,operatingHours:`จันทร์–ศุกร์ 08:00–15:30 น.`,documents:[{name:`สมุดคู่มือจดทะเบียนรถ`,note:`ตัวจริง`,isConditional:!1},{name:`บัตรประชาชนผู้โอน (เจ้าของเดิม)`,note:`สำเนา + ตัวจริง`,isConditional:!1},{name:`บัตรประชาชนผู้รับโอน (เจ้าของใหม่)`,note:`สำเนา + ตัวจริง`,isConditional:!1},{name:`สัญญาซื้อขาย`,note:`พร้อมลายเซ็นทั้ง 2 ฝ่าย`,isConditional:!1},{name:`หนังสือมอบอำนาจ`,note:`กรณีไม่ได้มาด้วยตนเอง`,isConditional:!0,condition:`มอบอำนาจ`}],preparation:[{name:`ตกลงราคาและทำสัญญาซื้อขาย`,note:`เตรียมสัญญาให้เรียบร้อย`},{name:`ตรวจสอบว่ารถไม่ติดค้างภาษี`,note:`ชำระภาษีให้เรียบร้อยก่อนโอน`}],steps:[`ตรวจสอบว่ารถไม่ติดค้างภาษี/ค่าปรับ`,`เตรียมเอกสารทั้งผู้โอนและผู้รับโอน`,`ยื่นคำขอโอนกรรมสิทธิ์ที่เคาน์เตอร์`,`ชำระค่าธรรมเนียมโอน`,`รับสมุดทะเบียนรถใหม่`],tips:[`ต้องทำที่สำนักงานขนส่งที่รถจดทะเบียน`,`ผู้โอนและผู้รับโอนต้องมาด้วยกัน หรือมอบอำนาจ`,`ตรวจสอบเลขตัวถัง/เลขเครื่องยนต์ให้ตรงกัน`],sources:[{title:`กรมการขนส่งทางบก`,url:`https://www.dlt.go.th`}],guidedQuestions:[{id:`transferRole`,question:`คุณเป็นฝ่ายไหนในการโอน?`,options:[`ผู้โอน (เจ้าของเดิม / ขายรถ)`,`ผู้รับโอน (เจ้าของใหม่ / ซื้อรถ)`]},{id:`bothPresent`,question:`ทั้งผู้โอนและผู้รับโอนจะไปที่ขนส่งด้วยกันได้ไหม?`,options:[`ไปด้วยกันได้`,`ฝ่ายใดฝ่ายหนึ่งไปไม่ได้ ต้องมอบอำนาจ`]}]},{id:`dlt-change-license`,agencyId:`dlt`,name:`เปลี่ยนชนิดใบอนุญาตขับรถ`,icon:`🔀`,description:`เปลี่ยนใบอนุญาตจากรถจักรยานยนต์เป็นรถยนต์ หรือเพิ่มชนิด`,category:`ใบขับขี่`,estimatedTime:`1–2 ชั่วโมง`,estimatedProcessDays:`ได้รับภายในวันเดียว`,estimatedCost:`505 บาท`,location:`สำนักงานขนส่งจังหวัด/สาขา`,operatingHours:`จันทร์–ศุกร์ 08:00–15:30 น.`,documents:[{name:`บัตรประชาชนตัวจริง`,note:``,isConditional:!1},{name:`ใบขับขี่เดิม`,note:`ตัวจริง`,isConditional:!1},{name:`ใบรับรองแพทย์`,note:`ออกไม่เกิน 1 เดือน`,isConditional:!1}],preparation:[{name:`จองคิวผ่าน DLT Smart Queue`,note:``}],steps:[`จองคิวผ่าน DLT Smart Queue`,`ยื่นเอกสาร`,`ทดสอบสมรรถภาพร่างกาย`,`อบรมภาคทฤษฎี`,`สอบข้อเขียน`,`สอบปฏิบัติ (สอบขับ)`,`ชำระค่าธรรมเนียม รับใบขับขี่ใหม่`],tips:[`ต้องมีใบขับขี่ประเภทเดิมที่ยังไม่หมดอายุ`],sources:[{title:`กรมการขนส่งทางบก`,url:`https://www.dlt.go.th`}],guidedQuestions:[{id:`changeType`,question:`คุณต้องการเปลี่ยนจากใบขับขี่ประเภทไหนเป็นประเภทไหน?`,options:[`จักรยานยนต์ → รถยนต์`,`รถยนต์ → รถสาธารณะ`,`อื่นๆ`]}]}],hospital:[{id:`hospital-new-patient`,agencyId:`hospital`,name:`ทำบัตรใหม่ / นัดพบแพทย์ครั้งแรก`,icon:`📝`,description:`สำหรับผู้ที่ต้องการเข้ารับบริการโรงพยาบาลรัฐเป็นครั้งแรก`,category:`บริการผู้ป่วย`,estimatedTime:`1–3 ชั่วโมง`,estimatedProcessDays:`ขึ้นอยู่กับจำนวนคิว`,estimatedCost:`0–500 บาท (ตามสิทธิ์)`,location:`โรงพยาบาลรัฐทุกแห่ง`,locationNote:`ต้องไปโรงพยาบาลตามสิทธิ์ที่ลงทะเบียนไว้ (กรณีบัตรทอง)`,operatingHours:`จันทร์–ศุกร์ 07:00–16:00 น. (เปิดรับบัตร 07:00–11:00 น.)`,documents:[{name:`บัตรประชาชนตัวจริง`,note:`ตัวจริงเท่านั้น`,isConditional:!1},{name:`บัตรสิทธิ์การรักษา`,note:`บัตรทอง / ประกันสังคม / สิทธิ์ข้าราชการ`,isConditional:!1},{name:`ใบส่งตัว (Referral)`,note:`กรณีถูกส่งต่อจาก รพ. อื่น`,isConditional:!0,condition:`มีใบส่งตัวจากโรงพยาบาลต้นทาง`},{name:`ยาที่รับประทานอยู่`,note:`นำไปให้แพทย์ดูทุกครั้ง`,isConditional:!1}],preparation:[{name:`ตรวจสอบสิทธิ์การรักษา`,note:`โทร สปสช. 1330 หรือตรวจสอบออนไลน์`,link:`https://www.nhso.go.th`},{name:`ตรวจสอบโรงพยาบาลตามสิทธิ์`,note:`กรณีบัตรทอง ต้องไป รพ. ที่ลงทะเบียนไว้`},{name:`โทรสอบถามเวลาเปิดรับบัตร`,note:`แต่ละ รพ. อาจมีเวลาต่างกัน`}],steps:[`มาถึง รพ. ก่อน 07:00 น. เพื่อรับบัตรคิว`,`ติดต่อจุด "ทำบัตรใหม่" พร้อมบัตรประชาชน`,`รอรับบัตร HN (หมายเลขประจำตัวผู้ป่วย)`,`ไปพบแพทย์ตามแผนกที่นัด`,`รับยาที่ห้องจ่ายยา`],tips:[`มาเช้าเพื่อรับบัตรคิว โดยเฉพาะวันจันทร์จะคนเยอะมาก`,`ตรวจสอบสิทธิ์การรักษาล่วงหน้าผ่าน สปสช. 1330`,`ถ้าเป็นบัตรทอง ต้องไป รพ. ตามสิทธิ์ที่ลงทะเบียนไว้`,`นำยาที่รับประทานอยู่ไปด้วยทุกครั้ง`],sources:[{title:`สปสช. — สิทธิ์บัตรทอง`,url:`https://www.nhso.go.th`},{title:`สายด่วน สปสช.`,url:`tel:1330`}],guidedQuestions:[{id:`healthInsurance`,question:`คุณมีสิทธิ์การรักษาประเภทใด?`,options:[`บัตรทอง (30 บาท)`,`ประกันสังคม`,`สิทธิ์ข้าราชการ`,`จ่ายเอง / ไม่มีสิทธิ์`,`ไม่แน่ใจ`]},{id:`visitPurpose`,question:`คุณต้องการไป รพ. เรื่องอะไร?`,options:[`ตรวจสุขภาพทั่วไป`,`ตรวจรักษาโรคเฉพาะทาง`,`ขอใบรับรองแพทย์`,`ฉีดวัคซีน`,`อื่นๆ`]},{id:`hasReferral`,question:`คุณมีใบส่งตัว (Referral) จาก รพ./คลินิก อื่นหรือไม่?`,options:[`มีใบส่งตัว`,`ไม่มี`]}]},{id:`hospital-medical-cert`,agencyId:`hospital`,name:`ขอใบรับรองแพทย์`,icon:`📄`,description:`ขอใบรับรองแพทย์สำหรับทำใบขับขี่ สมัครงาน สมัครเรียน หรืออื่นๆ`,category:`เอกสาร`,estimatedTime:`30 นาที – 2 ชั่วโมง`,estimatedProcessDays:`ได้รับภายในวันเดียว`,estimatedCost:`100–300 บาท`,location:`โรงพยาบาลรัฐ หรือคลินิกเอกชน`,operatingHours:`จันทร์–ศุกร์ 08:00–16:00 น.`,documents:[{name:`บัตรประชาชนตัวจริง`,note:``,isConditional:!1},{name:`รูปถ่าย 1 นิ้ว`,note:`บาง รพ. ถ่ายให้ที่จุดบริการ`,isConditional:!1}],preparation:[{name:`ระบุวัตถุประสงค์ให้ชัดเจน`,note:`แจ้งแพทย์ว่าต้องการใบรับรองเพื่ออะไร`}],steps:[`ติดต่อจุดทำบัตร/เวชระเบียน`,`แจ้งว่าต้องการ "ขอใบรับรองแพทย์"`,`ตรวจร่างกายตามที่แพทย์กำหนด`,`รอรับใบรับรองแพทย์`,`ชำระค่าบริการ`],tips:[`ถ้าขอใบรับรองแพทย์ทำใบขับขี่ แจ้งให้ชัดว่า "เพื่อทำใบขับขี่"`,`บางคลินิกเอกชนออกใบรับรองได้เร็วกว่า รพ. รัฐ`,`ใบรับรองแพทย์ส่วนใหญ่มีอายุ 1 เดือน`],sources:[{title:`แพทยสภา`,url:`https://www.tmc.or.th`}],guidedQuestions:[{id:`certPurpose`,question:`คุณต้องการใบรับรองแพทย์เพื่อวัตถุประสงค์อะไร?`,options:[`ทำใบขับขี่`,`สมัครงาน`,`สมัครเรียน`,`ทำประกัน`,`อื่นๆ`]}]},{id:`hospital-claim-rights`,agencyId:`hospital`,name:`เบิกสิทธิ์การรักษาพยาบาล`,icon:`💳`,description:`ใช้สิทธิ์บัตรทอง / ประกันสังคม / สิทธิ์ข้าราชการ ในการรักษาพยาบาล`,category:`สิทธิ์การรักษา`,estimatedTime:`แล้วแต่การรักษา`,estimatedProcessDays:`-`,estimatedCost:`ตามสิทธิ์ (ฟรี หรือจ่ายส่วนต่าง)`,location:`โรงพยาบาลตามสิทธิ์`,operatingHours:`จันทร์–ศุกร์ 08:00–16:00 น.`,documents:[{name:`บัตรประชาชนตัวจริง`,note:``,isConditional:!1},{name:`บัตรสิทธิ์การรักษา`,note:`บัตรทอง / บัตรประกันสังคม`,isConditional:!1},{name:`ใบส่งตัว (กรณีข้ามเขต)`,note:`ถ้าไป รพ. ที่ไม่ใช่ตามสิทธิ์`,isConditional:!0,condition:`ไป รพ. นอกเขต`}],preparation:[{name:`ตรวจสอบสิทธิ์ก่อน`,note:`โทร สปสช. 1330 หรือเช็กออนไลน์`,link:`https://www.nhso.go.th`},{name:`ตรวจสอบ รพ. ตามสิทธิ์`,note:`บัตรทอง: ต้องไป รพ. ที่ลงทะเบียน | ประกันสังคม: ไป รพ. ที่เลือก`}],steps:[`ตรวจสอบสิทธิ์ว่ายังใช้ได้`,`ไปโรงพยาบาลตามสิทธิ์`,`แจ้งใช้สิทธิ์ที่จุดลงทะเบียน`,`พบแพทย์ / รับการรักษา`,`ชำระส่วนต่าง (ถ้ามี)`],tips:[`บัตรทอง: รักษาฟรี ที่ รพ. ตามสิทธิ์ | ฉุกเฉินไปได้ทุก รพ.`,`ประกันสังคม: รักษาฟรี ที่ รพ. ที่เลือกตอนขึ้นทะเบียน`,`สิทธิ์ข้าราชการ: เบิกได้ตามระเบียบ สนร. ที่ รพ. รัฐ`,`ฉุกเฉิน โทร 1669 ไปได้ทุก รพ. ทุกสิทธิ์`],sources:[{title:`สปสช. — ตรวจสอบสิทธิ์`,url:`https://www.nhso.go.th`},{title:`ประกันสังคม`,url:`https://www.sso.go.th`}],guidedQuestions:[{id:`insuranceType`,question:`คุณมีสิทธิ์การรักษาประเภทใด?`,options:[`บัตรทอง (UC)`,`ประกันสังคม (SSO)`,`สิทธิ์ข้าราชการ (CSMBS)`,`ไม่แน่ใจ`]},{id:`isEmergency`,question:`อาการของคุณเป็นกรณีฉุกเฉินหรือไม่?`,options:[`ไม่ฉุกเฉิน — นัดหมายปกติ`,`ฉุกเฉิน — ต้องการรักษาทันที`]}]},{id:`hospital-medical-record`,agencyId:`hospital`,name:`ขอประวัติการรักษา`,icon:`📁`,description:`ขอสำเนาประวัติการรักษา (Medical Record) สำหรับการส่งต่อ หรือใช้ประกอบเอกสาร`,category:`เอกสาร`,estimatedTime:`1–3 วันทำการ`,estimatedProcessDays:`1–3 วันทำการ`,estimatedCost:`100–500 บาท`,location:`โรงพยาบาลที่เคยรักษา`,operatingHours:`จันทร์–ศุกร์ 08:00–16:00 น.`,documents:[{name:`บัตรประชาชนตัวจริง`,note:`ต้องเป็นเจ้าของข้อมูล`,isConditional:!1},{name:`หมายเลข HN (ถ้ามี)`,note:`หมายเลขประจำตัวผู้ป่วย`,isConditional:!1},{name:`หนังสือมอบอำนาจ`,note:`กรณีผู้อื่นมาขอแทน`,isConditional:!0,condition:`ไม่ได้มาด้วยตนเอง`}],preparation:[{name:`โทรสอบถาม รพ. ล่วงหน้า`,note:`สอบถามขั้นตอนและค่าบริการ`},{name:`เตรียมเลข HN`,note:`ดูจากบัตรนัดหรือใบเสร็จเก่า`}],steps:[`ติดต่อแผนกเวชระเบียน`,`ยื่นคำร้องขอประวัติการรักษา`,`ชำระค่าบริการ`,`รอรับเอกสาร (1–3 วันทำการ)`],tips:[`บาง รพ. ส่งข้อมูลผ่านระบบอิเล็กทรอนิกส์ได้ ลองสอบถาม`,`ข้อมูลประวัติการรักษาเป็นสิทธิ์ของผู้ป่วย สามารถขอได้เสมอ`],sources:[{title:`พ.ร.บ. สุขภาพแห่งชาติ`,url:`https://www.nationalhealth.or.th`}],guidedQuestions:[{id:`recordPurpose`,question:`คุณต้องการประวัติการรักษาเพื่ออะไร?`,options:[`ส่งต่อไป รพ. อื่น`,`ใช้ประกอบเรื่องประกัน`,`เก็บไว้เป็นข้อมูลส่วนตัว`,`อื่นๆ`]}]}]};function c(){return Object.values(s).flat()}function l(e){return o.find(t=>t.id===e)}function u(e){return c().find(t=>t.id===e)}function d(e){return s[e]||[]}var f={currentPage:`home`,checkedItems:JSON.parse(localStorage.getItem(`govbuddy-checked`)||`{}`),chatHistory:[],guidedAnswers:{}};function p(){localStorage.setItem(`govbuddy-checked`,JSON.stringify(f.checkedItems))}var m={search:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,back:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg>`,chat:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,send:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9z"/></svg>`,check:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>`,chevron:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>`,close:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,home:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,clipboard:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,sparkle:`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z"/></svg>`,user:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>`,location:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,clock:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,money:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>`,link:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,phone:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`},h=document.getElementById(`app`);function g(e){return`
    <nav class="bottom-nav" id="bottom-nav">
      <button class="nav-item ${e===`home`?`active`:``}" data-nav="home" id="nav-home">
        <span class="nav-item-icon">${m.home}</span>
        <span class="nav-item-label">หน้าแรก</span>
      </button>
      <button class="nav-item ${e===`checklist`?`active`:``}" data-nav="checklist" id="nav-checklist">
        <span class="nav-item-icon">${m.clipboard}</span>
        <span class="nav-item-label">การเตรียมตัว</span>
      </button>
      <button class="nav-item ai-chat ${e===`chat`?`active`:``}" data-nav="chat" id="nav-chat">
        <span class="nav-item-icon">${m.sparkle}</span>
        <span class="nav-item-label">AI Chat</span>
      </button>
      <button class="nav-item ${e===`profile`?`active`:``}" data-nav="profile" id="nav-profile">
        <span class="nav-item-icon">${m.user}</span>
        <span class="nav-item-label">โปรไฟล์</span>
      </button>
    </nav>
  `}function _(){document.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.nav;t===`home`?n(`/`):t===`chat`?n(`/chat`):t===`checklist`?n(`/saved`):t===`profile`&&n(`/profile`)})})}function v(){f.currentPage=`home`,h.innerHTML=`
    <div class="page" id="page-home">
      <!-- Home Header -->
      <header class="home-header">
        <div class="home-header-top">
          <div class="home-logo">
            <div class="home-logo-icon">${m.sparkle}</div>
            <span class="home-logo-text">GovBuddy AI</span>
          </div>
          <button class="header-action" id="home-chat-btn" style="color: rgba(255,255,255,0.8)">
            ${m.chat}
          </button>
        </div>
        <p class="home-greeting">สวัสดี! วันนี้ให้ช่วยเรื่องอะไรดี?</p>
        <!-- Search -->
        <div class="search-bar" id="search-bar">
          <span class="search-bar-icon">${m.search}</span>
          <input type="text" placeholder="ค้นหาหน่วยงาน หรือบริการที่ต้องการ" id="search-input" />
        </div>
      </header>

      <div class="page-content">
        <!-- Search Results (hidden by default) -->
        <div id="search-results" class="hidden" style="margin-bottom: var(--space-6);"></div>

        <!-- Categories -->
        <div id="categories-section">
          <div class="section-title">
            <span>หมวดหมู่หน่วยงาน</span>
          </div>
          <div class="category-grid">
            ${a.map(e=>`
              <div class="category-item ${e.enabled?``:`disabled`}" data-category="${e.id}">
                <div class="category-icon" style="background: ${e.color}15; color: ${e.color}">
                  ${e.icon}
                </div>
                <span class="category-label">${e.name}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Popular Agencies -->
        <div id="agencies-section">
          <div class="section-title">
            <span>หน่วยงานยอดนิยม</span>
          </div>
          <div class="agency-list">
            ${o.map(e=>`
              <div class="agency-card" data-agency="${e.id}" id="agency-${e.id}">
                <div class="agency-card-icon" style="background: ${e.bgColor}">
                  ${e.icon}
                </div>
                <div class="agency-card-info">
                  <div class="agency-card-name">${e.name}</div>
                  <div class="agency-card-desc">${e.description}</div>
                </div>
                <span class="agency-card-arrow">${m.chevron}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Quick AI Help -->
        <div style="margin-top: var(--space-6); padding: var(--space-4); background: linear-gradient(135deg, var(--color-accent-light), var(--color-primary-light)); border-radius: var(--radius-lg); text-align: center;">
          <div style="font-size: 28px; margin-bottom: var(--space-2);">🤖</div>
          <div style="font-size: var(--font-size-md); font-weight: var(--font-weight-semibold); color: var(--color-primary); margin-bottom: var(--space-1);">ไม่แน่ใจต้องทำอะไร?</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-3);">บอก AI ว่าคุณต้องการทำอะไร แล้วเราจะช่วยแนะนำ</div>
          <button class="cta-button" id="home-ai-btn" style="max-width: 240px; margin: 0 auto; font-size: var(--font-size-base); padding: var(--space-3) var(--space-5);">
            ${m.sparkle} เริ่มคุยกับ AI
          </button>
        </div>
      </div>

      ${g(`home`)}
    </div>
  `,_(),document.querySelectorAll(`.agency-card`).forEach(e=>{e.addEventListener(`click`,()=>{n(`/agency`,{agencyId:e.dataset.agency})})}),document.querySelectorAll(`.category-item:not(.disabled)`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.category,r=o.find(e=>e.categoryId===t);r&&n(`/agency`,{agencyId:r.id})})}),document.getElementById(`home-chat-btn`)?.addEventListener(`click`,()=>n(`/chat`)),document.getElementById(`home-ai-btn`)?.addEventListener(`click`,()=>n(`/chat`));let e=document.getElementById(`search-input`),t=document.getElementById(`search-results`),r=document.getElementById(`categories-section`),i=document.getElementById(`agencies-section`);e?.addEventListener(`input`,e=>{let a=e.target.value.trim();if(a.length===0){t.classList.add(`hidden`),r.classList.remove(`hidden`),i.classList.remove(`hidden`);return}r.classList.add(`hidden`),i.classList.add(`hidden`),t.classList.remove(`hidden`);let s=o.filter(e=>e.name.includes(a)||e.shortName.includes(a)||e.description.includes(a)),c=Object.values(d(`dlt`)).concat(Object.values(d(`hospital`))).filter(e=>e.name.includes(a)||e.description.includes(a)),l=``;s.length>0&&(l+=`<div class="section-title">หน่วยงาน</div><div class="agency-list" style="margin-bottom: var(--space-4);">`,s.forEach(e=>{l+=`
          <div class="agency-card" data-agency="${e.id}">
            <div class="agency-card-icon" style="background: ${e.bgColor}">${e.icon}</div>
            <div class="agency-card-info">
              <div class="agency-card-name">${e.name}</div>
              <div class="agency-card-desc">${e.description}</div>
            </div>
            <span class="agency-card-arrow">${m.chevron}</span>
          </div>
        `}),l+=`</div>`),c.length>0&&(l+=`<div class="section-title">บริการ</div><div class="service-list">`,c.forEach(e=>{l+=`
          <div class="service-card" data-service="${e.id}">
            <div class="service-card-icon" style="background: var(--color-primary-light); color: var(--color-primary)">${e.icon}</div>
            <div class="service-card-info">
              <div class="service-card-name">${e.name}</div>
              <div class="service-card-desc">${e.description}</div>
            </div>
            <span class="service-card-arrow">${m.chevron}</span>
          </div>
        `}),l+=`</div>`),s.length===0&&c.length===0&&(l=`
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-title">ไม่พบผลลัพธ์</div>
          <div class="empty-state-desc">ลองค้นหาด้วยคำอื่น หรือถาม AI ช่วยได้เลย</div>
        </div>
      `),t.innerHTML=l,t.querySelectorAll(`.agency-card`).forEach(e=>{e.addEventListener(`click`,()=>n(`/agency`,{agencyId:e.dataset.agency}))}),t.querySelectorAll(`.service-card`).forEach(e=>{e.addEventListener(`click`,()=>n(`/service`,{serviceId:e.dataset.service}))})})}function y(e){f.currentPage=`agency`;let t=l(e.agencyId);if(!t)return n(`/`);let r=d(t.id),i={};r.forEach(e=>{i[e.category]||(i[e.category]=[]),i[e.category].push(e)}),h.innerHTML=`
    <div class="page" id="page-agency">
      <header class="header">
        <button class="header-back" id="agency-back">${m.back}</button>
        <h1 class="header-title">${t.name}</h1>
        <button class="header-action" id="agency-chat-btn">${m.chat}</button>
      </header>

      <!-- Agency Info Banner -->
      <div style="padding: var(--space-3) var(--space-4); background: ${t.bgColor}; border-bottom: 1px solid var(--color-border-light);">
        <div style="display: flex; align-items: center; gap: var(--space-3);">
          <div style="font-size: 32px;">${t.icon}</div>
          <div style="flex: 1;">
            <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">สายด่วน</div>
            <div style="display: flex; align-items: center; gap: var(--space-2);">
              <a href="tel:${t.hotline}" style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-primary);">${t.hotline}</a>
              <span style="color: var(--color-text-muted);">${m.phone}</span>
            </div>
          </div>
          <a href="${t.website}" target="_blank" style="display: flex; align-items: center; gap: 4px; padding: var(--space-2) var(--space-3); background: var(--color-surface); border-radius: var(--radius-full); font-size: var(--font-size-xs); color: var(--color-accent); font-weight: var(--font-weight-medium); box-shadow: var(--shadow-xs);">
            เว็บไซต์ ${m.link}
          </a>
        </div>
      </div>

      <div class="page-content">
        <div class="section-title" style="margin-top: var(--space-2);">
          <span>บริการทั้งหมด</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: var(--font-weight-regular);">${r.length} บริการ</span>
        </div>

        ${Object.entries(i).map(([e,n])=>`
          <div style="margin-bottom: var(--space-5);">
            <div style="font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: var(--space-2); padding-left: var(--space-1);">
              ${e}
            </div>
            <div class="service-list">
              ${n.map(e=>`
                <div class="service-card" data-service="${e.id}" id="service-${e.id}">
                  <div class="service-card-icon" style="background: ${t.bgColor}; color: ${t.color}">
                    ${e.icon}
                  </div>
                  <div class="service-card-info">
                    <div class="service-card-name">${e.name}</div>
                    <div class="service-card-desc">${e.description}</div>
                  </div>
                  <span class="service-card-arrow">${m.chevron}</span>
                </div>
              `).join(``)}
            </div>
          </div>
        `).join(``)}

        <!-- Ask AI -->
        <div style="padding: var(--space-4); background: var(--color-primary-50); border-radius: var(--radius-lg); text-align: center; margin-top: var(--space-2);">
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-2);">ไม่แน่ใจว่าต้องการบริการไหน?</div>
          <button class="quick-reply-btn" id="agency-ask-ai" style="font-size: var(--font-size-base); padding: var(--space-2) var(--space-5);">
            ${m.sparkle} ถาม AI ช่วยแนะนำ
          </button>
        </div>
      </div>

      ${g(`home`)}
    </div>
  `,_(),document.getElementById(`agency-back`)?.addEventListener(`click`,()=>n(`/`)),document.getElementById(`agency-chat-btn`)?.addEventListener(`click`,()=>n(`/chat`,{agencyId:t.id})),document.getElementById(`agency-ask-ai`)?.addEventListener(`click`,()=>n(`/chat`,{agencyId:t.id})),document.querySelectorAll(`.service-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.service;b(t)})})}function b(e){let t=u(e);if(!t||!t.guidedQuestions||t.guidedQuestions.length===0){n(`/service`,{serviceId:e});return}f.guidedAnswers={};let r=t.guidedQuestions;function i(t){let a=r[t],o=(t+1)/r.length*100;document.querySelector(`.guided-overlay`)?.remove();let s=document.createElement(`div`);s.className=`guided-overlay`,s.innerHTML=`
      <div class="guided-sheet">
        <div class="guided-handle"></div>
        <div class="progress-bar" style="margin: 0 0 var(--space-5) 0;">
          <div class="progress-bar-fill" style="width: ${o}%"></div>
        </div>
        <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: var(--space-2);">
          คำถาม ${t+1} จาก ${r.length}
        </div>
        <div class="guided-question">${a.question}</div>
        <div class="guided-options">
          ${a.options.map((e,t)=>`
            <button class="guided-option" data-option="${t}">${e}</button>
          `).join(``)}
        </div>
        <button class="guided-skip" id="guided-skip">ข้ามคำถามนี้ →</button>
      </div>
    `,document.body.appendChild(s),s.querySelectorAll(`.guided-option`).forEach(o=>{o.addEventListener(`click`,()=>{f.guidedAnswers[a.id]=a.options[parseInt(o.dataset.option)],o.classList.add(`selected`),setTimeout(()=>{t+1<r.length?i(t+1):(s.remove(),n(`/service`,{serviceId:e}))},300)})}),s.querySelector(`#guided-skip`)?.addEventListener(`click`,()=>{t+1<r.length?i(t+1):(s.remove(),n(`/service`,{serviceId:e}))}),s.addEventListener(`click`,e=>{e.target===s&&s.remove()})}i(0)}function x(e){let t=[{key:`prepare`,label:`เตรียมเอกสาร`},{key:`verify`,label:`ตรวจสอบ`},{key:`travel`,label:`เดินทาง`},{key:`queue`,label:`รอคิว`},{key:`service`,label:`รับบริการ`},{key:`done`,label:`เสร็จสิ้น`}],n=e.documents.filter((t,n)=>f.checkedItems[`${e.id}-doc-${n}`]).length,r=e.preparation.filter((t,n)=>f.checkedItems[`${e.id}-prep-${n}`]).length,i=e.documents.length+e.preparation.length,a=i?(n+r)/i*100:0,o=0;return a>=100?o=5:a>=75?o=4:a>=50?o=3:a>=25?o=2:a>=10&&(o=1),{steps:t,currentIndex:o,progress:(o+1)/t.length*100,statusText:o>=4?`พร้อมออกเดินทาง`:o>=2?`กำลังเตรียมตัว`:`เริ่มต้น`}}function S(e){return e.locations||{dlt:[{name:`สำนักงานขนส่งกลาง`,address:`กรุงเทพมหานคร`,distance:`4.2 กม.`,lat:13.7563,lng:100.5018},{name:`สำนักงานขนส่งลาดพร้าว`,address:`ลาดพร้าว`,distance:`8.6 กม.`,lat:13.816,lng:100.609},{name:`สำนักงานขนส่งนนทบุรี`,address:`นนทบุรี`,distance:`16.8 กม.`,lat:13.862,lng:100.514}],hospital:[{name:`โรงพยาบาลศิริราช`,address:`เขตราชเทวี`,distance:`5.1 กม.`,lat:13.7565,lng:100.4856},{name:`โรงพยาบาลรามาธิบดี`,address:`เขตพญาไท`,distance:`8.9 กม.`,lat:13.764,lng:100.532},{name:`โรงพยาบาลทหารผ่านศึก`,address:`เขตบางกอกน้อย`,distance:`12.1 กม.`,lat:13.7684,lng:100.4658}]}[e.agencyId]||[{name:`หน่วยงานที่ใกล้ที่สุด`,address:e.location,distance:`ระยะทางประมาณ 3–10 กม.`,lat:13.7563,lng:100.5018}]}function C(e,t,n,r){let i=e=>e*Math.PI/180,a=i(n-e),o=i(r-t),s=Math.sin(a/2)*Math.sin(a/2)+Math.cos(i(e))*Math.cos(i(n))*Math.sin(o/2)*Math.sin(o/2);return 12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))}function w(e,t=null){let n=document.getElementById(`gps-locations`);n&&(n.innerHTML=S(e).map(e=>{if(!t)return{...e,distanceText:e.distance||`ประมาณ 5–15 กม.`};let n=C(t.latitude,t.longitude,e.lat,e.lng);return{...e,distanceText:`${n.toFixed(1)} กม.`}}).slice(0,3).map((e,t)=>`
      <div class="gps-item ${t===0?`recommended`:``}">
        <div class="gps-item-rank">${t===0?`แนะนำ`:t+1}</div>
        <div class="gps-item-content">
          <div class="gps-item-name">${e.name}</div>
          <div class="gps-item-address">${e.address}</div>
        </div>
        <div class="gps-item-distance">${e.distanceText}</div>
      </div>
    `).join(``))}function T(e){f.currentPage=`service`;let t=u(e.serviceId);if(!t)return n(`/`);l(t.agencyId);let r=t.id,i=x(t),a=new Date,o=a.getHours(),s=a.getDay(),c=s>=1&&s<=5&&o>=8&&o<16,d=S(t);h.innerHTML=`
    <div class="page" id="page-service-detail">
      <header class="header">
        <button class="header-back" id="detail-back">${m.back}</button>
        <h1 class="header-title">${t.name}</h1>
        <button class="header-action" id="detail-chat-btn">${m.chat}</button>
      </header>

      <div class="page-scroll">
        <!-- Hero -->
        <div class="detail-hero">
          <div style="font-size: 36px; margin-bottom: var(--space-3);">${t.icon}</div>
          <h2 class="detail-hero-title">${t.name}</h2>
          <p class="detail-hero-subtitle">${t.description}</p>
        </div>

        <div class="page-content" style="margin-top: -8px;">
          <div class="status-card">
            <div class="status-header-row">
              <div class="status-title">สถานะการเตรียมตัว</div>
              <span class="status-pill">${i.statusText}</span>
            </div>
            <div class="progress-bar" style="margin: 0; margin-top: var(--space-3);">
              <div class="progress-bar-fill" style="width: ${i.progress}%"></div>
            </div>
            <div class="journey-steps">
              ${i.steps.map((e,t)=>`
                <div class="journey-step ${t<=i.currentIndex?`active`:``}">
                  <div class="journey-dot">${t+1}</div>
                  <span>${e.label}</span>
                </div>
              `).join(``)}
            </div>
          </div>

          <div class="utility-card document-card">
            <div class="utility-card-header">
              <div>
                <div class="utility-card-title">ตรวจสอบเอกสาร</div>
                <div class="utility-card-subtitle">เอาเอกสารเข้ามาตรวจว่าใช่หรือยัง</div>
              </div>
              <div class="utility-chip">AI Scan</div>
            </div>
            <input type="file" id="doc-scan-input" accept="image/*" capture="environment" class="hidden" />
            <button id="doc-scan-btn" class="scan-button">📷 ถ่าย/อัปโหลดเอกสาร</button>
            <div id="scan-result" class="scan-result">
              ยังไม่มีการสแกนเอกสาร กรุณาอัปโหลดรูปภาพเพื่อประเมินความพร้อม
            </div>
          </div>

          <div class="utility-card gps-card">
            <div class="utility-card-header">
              <div>
                <div class="utility-card-title">หน่วยงานใกล้ที่สุด</div>
                <div class="utility-card-subtitle">แนะนำจุดที่ควรไปก่อน</div>
              </div>
              <button id="gps-locate-btn" class="ghost-button">📍 ใช้ตำแหน่งของฉัน</button>
            </div>
            <div id="gps-locations" class="gps-list">
              ${d.slice(0,3).map((e,t)=>`
                <div class="gps-item ${t===0?`recommended`:``}">
                  <div class="gps-item-rank">${t===0?`แนะนำ`:t+1}</div>
                  <div class="gps-item-content">
                    <div class="gps-item-name">${e.name}</div>
                    <div class="gps-item-address">${e.address}</div>
                  </div>
                  <div class="gps-item-distance">${e.distance||`ประมาณ 5–15 กม.`}</div>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Info Cards -->
          <div class="info-cards">
            <!-- Location -->
            <div class="info-card">
              <div class="info-card-icon" style="background: var(--color-accent-light); color: var(--color-accent);">
                ${m.location}
              </div>
              <div class="info-card-content">
                <div class="info-card-label">สถานที่</div>
                <div class="info-card-value">${t.location}</div>
                ${t.locationNote?`<div class="info-card-note">${t.locationNote}</div>`:``}
              </div>
              <span class="info-card-badge ${c?`badge-open`:`badge-closed`}">${c?`เปิดอยู่`:`ปิดแล้ว`}</span>
            </div>

            <!-- Cost -->
            <div class="info-card">
              <div class="info-card-icon" style="background: var(--color-success-light); color: var(--color-success);">
                ${m.money}
              </div>
              <div class="info-card-content">
                <div class="info-card-label">ค่าใช้จ่าย</div>
                <div class="info-card-value">${t.estimatedCost}</div>
                ${t.costBreakdown?`
                  <div class="info-card-note">${t.costBreakdown.map(e=>`${e.item}: ${e.amount}`).join(` | `)}</div>
                `:``}
              </div>
            </div>

            <!-- Time -->
            <div class="info-card">
              <div class="info-card-icon" style="background: var(--color-warning-light); color: var(--color-warning);">
                ${m.clock}
              </div>
              <div class="info-card-content">
                <div class="info-card-label">เวลาดำเนินการ</div>
                <div class="info-card-value">${t.estimatedTime}</div>
                <div class="info-card-note">${t.operatingHours}</div>
              </div>
            </div>
          </div>

          <!-- Documents Checklist -->
          <div class="checklist-section">
            <div class="checklist-section-title">
              <span class="checklist-section-number">1</span>
              เอกสารที่ต้องเตรียม
            </div>
            <div class="checklist-items" id="documents-checklist">
              ${t.documents.map((e,t)=>{let n=`${r}-doc-${t}`;return`
                  <div class="checklist-item ${f.checkedItems[n]?`checked`:``}" data-key="${n}">
                    <div class="checklist-checkbox">${m.check}</div>
                    <div class="checklist-item-content">
                      <div class="checklist-item-name">${e.name}</div>
                      ${e.note?`<div class="checklist-item-note">${e.note}</div>`:``}
                      ${e.isConditional?`<div class="checklist-item-conditional">⚠️ ${e.condition||`มีเงื่อนไข`}</div>`:``}
                    </div>
                  </div>
                `}).join(``)}
            </div>
          </div>

          <!-- Preparation Checklist -->
          ${t.preparation?`
            <div class="checklist-section">
              <div class="checklist-section-title">
                <span class="checklist-section-number">2</span>
                การเตรียมตัวล่วงหน้า
              </div>
              <div class="checklist-items" id="preparation-checklist">
                ${t.preparation.map((e,t)=>{let n=`${r}-prep-${t}`;return`
                    <div class="checklist-item ${f.checkedItems[n]?`checked`:``}" data-key="${n}">
                      <div class="checklist-checkbox">${m.check}</div>
                      <div class="checklist-item-content">
                        <div class="checklist-item-name">${e.name}</div>
                        ${e.note?`<div class="checklist-item-note">${e.note}</div>`:``}
                        ${e.link?`<a href="${e.link}" target="_blank" style="display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; font-size: var(--font-size-xs); color: var(--color-accent);">${m.link} เปิดลิงก์</a>`:``}
                      </div>
                    </div>
                  `}).join(``)}
              </div>
            </div>
          `:``}

          <!-- Steps -->
          <div class="checklist-section">
            <div class="checklist-section-title">
              <span class="checklist-section-number">3</span>
              ขั้นตอนการดำเนินการ
            </div>
            <div style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border-light); overflow: hidden;">
              ${t.steps.map((e,t)=>`
                <div style="display: flex; gap: var(--space-3); padding: var(--space-3) var(--space-4); ${t>0?`border-top: 1px solid var(--color-border-light);`:``}">
                  <div style="width: 24px; height: 24px; background: var(--color-primary-light); color: var(--color-primary); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); flex-shrink: 0;">${t+1}</div>
                  <div style="font-size: var(--font-size-sm); color: var(--color-text); line-height: var(--line-height-relaxed); padding-top: 2px;">${e}</div>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Tips -->
          <div class="tips-section">
            <div class="tips-title">💡 เคล็ดลับ</div>
            <div class="tips-list">
              ${t.tips.map(e=>`<div class="tip-item">${e}</div>`).join(``)}
            </div>
          </div>

          <!-- Officer Scripts (Painpoint #8) -->
          <div class="tips-section" style="background: var(--color-primary-50); border: 1px dashed var(--color-accent);">
            <div class="tips-title" style="color: var(--color-primary);">🗣️ สิ่งที่ควรแจ้งเจ้าหน้าที่เมื่อไปถึง</div>
            <div class="tips-list">
              ${(t.officerScripts||[`แจ้งจุดรับเรื่อง: "มาติดต่อขอรับบริการ ${t.name}"`,`ยื่นเอกสาร: "ยื่นบัตรประชาชนและเอกสารตามเช็คลิสต์ที่เตรียมไว้"`]).map(e=>`
                <div class="tip-item" style="color: var(--color-text);">
                  ${e}
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Sources -->
          <div style="margin-bottom: var(--space-8);">
            <div style="font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); margin-bottom: var(--space-2);">📌 แหล่งข้อมูล</div>
            ${t.sources.map(e=>`
              <a href="${e.url}" target="_blank" class="chat-source" style="margin-bottom: var(--space-1);">
                <span class="chat-source-icon">${m.link}</span>
                ${e.title}
              </a>
            `).join(``)}
          </div>

          <!-- Spacer for CTA -->
          <div style="height: 80px;"></div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-container">
        <button class="cta-button" id="cta-ready">
          ✅ ฉันเตรียมพร้อมแล้ว
        </button>
      </div>

      ${g(`home`)}
    </div>
  `,_(),document.getElementById(`detail-back`)?.addEventListener(`click`,()=>{n(`/agency`,{agencyId:t.agencyId})}),document.getElementById(`detail-chat-btn`)?.addEventListener(`click`,()=>{n(`/chat`,{serviceId:t.id})}),document.querySelectorAll(`.checklist-item`).forEach(e=>{e.addEventListener(`click`,n=>{if(n.target.closest(`a`))return;let r=e.dataset.key;f.checkedItems[r]=!f.checkedItems[r],p(),e.classList.toggle(`checked`);let i=e.querySelector(`.checklist-checkbox`);i.style.animation=`checkPop 0.3s ease-out`,setTimeout(()=>i.style.animation=``,300);let a=x(t),o=document.querySelector(`.status-card .progress-bar-fill`),s=document.querySelector(`.status-pill`);o&&(o.style.width=`${a.progress}%`),s&&(s.textContent=a.statusText),document.querySelectorAll(`.journey-step`).forEach((e,t)=>{e.classList.toggle(`active`,t<=a.currentIndex)}),E(t)})});let v=document.getElementById(`doc-scan-input`),y=document.getElementById(`scan-result`);document.getElementById(`doc-scan-btn`)?.addEventListener(`click`,()=>v?.click()),v?.addEventListener(`change`,e=>{let n=e.target.files?.[0];if(!n)return;let r=n.type.startsWith(`image/`),i=n.name.toLowerCase(),a=t.documents.map(e=>e.name.toLowerCase()).some(e=>i.includes(e.replace(/[^a-z]/g,``))||e.includes(`บัตร`)&&i.includes(`id`));if(!r){y.textContent=`รูปแบบไฟล์ไม่ถูกต้อง กรุณาอัปโหลดภาพเอกสารที่ชัดเจน`,y.classList.add(`warning`);return}if(n.size>5242880){y.textContent=`ขนาดรูปภาพใหญ่เกินไป กรุณาอัปโหลดภาพที่เล็กกว่า 5 MB`,y.classList.add(`warning`);return}y.classList.remove(`warning`),y.textContent=a||r?`✅ เอกสารที่อัปโหลดมีความคงที่และชัดเจนสำหรับการยื่นเรื่อง สามารถใช้ได้ทันที`:`⚠️ เอกสารมีความเป็นไปได้ แต่ควรตรวจสอบให้แน่ใจว่าข้อมูลครบและชัดเจนก่อนออกไป`}),document.getElementById(`gps-locate-btn`)?.addEventListener(`click`,()=>{if(!navigator.geolocation){w(t);return}navigator.geolocation.getCurrentPosition(e=>{w(t,{latitude:e.coords.latitude,longitude:e.coords.longitude})},()=>{w(t)})}),document.getElementById(`cta-ready`)?.addEventListener(`click`,()=>{let e=document.getElementById(`cta-ready`);e.classList.add(`success`),e.innerHTML=`🎉 บันทึกแล้ว! พร้อมไปติดต่อ`,e.style.pointerEvents=`none`,setTimeout(()=>{n(`/chat`,{serviceId:t.id,autoMessage:`ฉันเตรียมเอกสารเรียบร้อยแล้ว มีอะไรที่ต้องรู้เพิ่มเติมไหม?`})},1500)}),E(t)}function E(e){let t=(e.documents?.length||0)+(e.preparation?.length||0),n=[...document.querySelectorAll(`.checklist-item.checked`)].length,r=document.getElementById(`cta-ready`);r&&!r.classList.contains(`success`)&&(n===t&&t>0?(r.innerHTML=`🎉 เตรียมครบแล้ว! ไปต่อเลย`,r.classList.add(`success`)):r.innerHTML=`✅ ฉันเตรียมพร้อมแล้ว (${n}/${t})`)}function D(e={}){f.currentPage=`chat`;let t=e.serviceId,r=e.agencyId,i=t?u(t):null,a=r?l(r):null,o=`สวัสดีค่ะ! 😊 ยินดีต้อนรับสู่ GovBuddy AI

ฉันช่วยเตรียมตัวก่อนไปติดต่อหน่วยงานรัฐได้ค่ะ บอกมาเลยว่าต้องการทำอะไร?`,s=[`อยากทำใบขับขี่ใหม่`,`ต้องเตรียมเอกสารอะไรบ้าง?`,`อยากไปโรงพยาบาล`,`ค่าใช้จ่ายเท่าไหร่?`];i?(o=`สวัสดีค่ะ! 😊 คุณกำลังดูเรื่อง "${i.name}"\n\nมีอะไรอยากถามเพิ่มเติมไหมคะ? ฉันช่วยได้เลย!`,s=[`ต้องเตรียมเอกสารอะไรบ้าง?`,`ค่าใช้จ่ายทั้งหมดเท่าไหร่?`,`จองคิวล่วงหน้าได้ไหม?`,`มีอะไรต้องระวังบ้าง?`]):a&&(o=`สวัสดีค่ะ! 😊 คุณสนใจบริการจาก "${a.name}"\n\nบอกมาเลยว่าต้องการทำอะไรคะ?`),e.autoMessage&&(s=[]),h.innerHTML=`
    <div class="page chat-page" id="page-chat">
      <header class="header chat-header">
        <button class="header-back" id="chat-back">${m.back}</button>
        <div style="display: flex; align-items: center; gap: var(--space-2); flex: 1; justify-content: center;">
          <div style="width: 28px; height: 28px; background: linear-gradient(135deg, var(--color-accent), var(--color-primary)); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">
            ${m.sparkle}
          </div>
          <h1 class="header-title" style="flex: none;">GovBuddy AI</h1>
        </div>
        <button class="header-action" id="chat-close">${m.close}</button>
      </header>

      <div class="chat-messages" id="chat-messages">
        <div class="chat-bubble ai">
          <div class="chat-bubble-label">GovBuddy AI</div>
          ${o.replace(/\n/g,`<br>`)}
        </div>
        ${s.length>0?`
          <div class="chat-quick-replies" id="quick-replies">
            ${s.map(e=>`<button class="quick-reply-btn" data-reply="${e}">${e}</button>`).join(``)}
          </div>
        `:``}
      </div>

      <div class="chat-input-container">
        <div class="chat-input-wrapper">
          <input type="text" class="chat-input" id="chat-input" placeholder="พิมพ์คำถามของคุณ..." />
          <button class="chat-send-btn" id="chat-send" disabled>${m.send}</button>
        </div>
      </div>
    </div>
  `;let c=document.getElementById(`chat-messages`),d=document.getElementById(`chat-input`),p=document.getElementById(`chat-send`);document.getElementById(`chat-back`)?.addEventListener(`click`,()=>{i?n(`/service`,{serviceId:i.id}):a?n(`/agency`,{agencyId:a.id}):n(`/`)}),document.getElementById(`chat-close`)?.addEventListener(`click`,()=>n(`/`)),document.querySelectorAll(`.quick-reply-btn`).forEach(e=>{e.addEventListener(`click`,()=>{g(e.dataset.reply),document.getElementById(`quick-replies`)?.remove()})}),d?.addEventListener(`input`,()=>{p.disabled=d.value.trim().length===0}),d?.addEventListener(`keydown`,e=>{e.key===`Enter`&&d.value.trim()&&g(d.value.trim())}),p?.addEventListener(`click`,()=>{d.value.trim()&&g(d.value.trim())}),e.autoMessage&&setTimeout(()=>g(e.autoMessage),500);function g(e){let t=document.createElement(`div`);t.className=`chat-bubble user`,t.textContent=e,c.appendChild(t),d.value=``,p.disabled=!0,c.scrollTop=c.scrollHeight;let n=document.createElement(`div`);n.className=`typing-indicator`,n.innerHTML=`<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`,c.appendChild(n),c.scrollTop=c.scrollHeight,setTimeout(()=>{n.remove();let t=O(e,i,a),r=document.createElement(`div`);if(r.className=`chat-bubble ai`,r.innerHTML=`<div class="chat-bubble-label">GovBuddy AI</div>${t.text}`,t.source&&(r.innerHTML+=`
          <a href="${t.source.url}" target="_blank" class="chat-source">
            <span class="chat-source-icon">${m.link}</span>
            ${t.source.title}
          </a>
        `),c.appendChild(r),t.quickReplies&&t.quickReplies.length>0){let e=document.createElement(`div`);e.className=`chat-quick-replies`,e.innerHTML=t.quickReplies.map(e=>`<button class="quick-reply-btn" data-reply="${e}">${e}</button>`).join(``),c.appendChild(e),e.querySelectorAll(`.quick-reply-btn`).forEach(t=>{t.addEventListener(`click`,()=>{g(t.dataset.reply),e.remove()})})}c.scrollTop=c.scrollHeight},1200+Math.random()*800)}}function O(e,t,n){let r=e.toLowerCase();if(r.includes(`เอกสาร`)||r.includes(`เตรียม`)||r.includes(`document`)){if(t){let e=t.documents.map(e=>`• ${e.name}${e.note?` <span style="color: var(--color-text-muted)">(${e.note})</span>`:``}`).join(`<br>`);return{text:`สำหรับ "${t.name}" ต้องเตรียมเอกสารดังนี้ค่ะ:<br><br>${e}<br><br>ต้องการทราบข้อมูลเพิ่มเติมไหมคะ?`,source:t.sources?.[0],quickReplies:[`ค่าใช้จ่ายเท่าไหร่?`,`ขั้นตอนเป็นยังไง?`,`จองคิวยังไง?`]}}return{text:`กรุณาเลือกบริการที่ต้องการก่อนนะคะ จะได้แนะนำเอกสารที่ต้องเตรียมได้ถูกต้อง 😊`,quickReplies:[`อยากทำใบขับขี่ใหม่`,`อยากไปโรงพยาบาล`]}}if(r.includes(`ค่าใช้จ่าย`)||r.includes(`ราคา`)||r.includes(`เท่าไหร่`)||r.includes(`กี่บาท`)){if(t){let e=`ค่าใช้จ่ายสำหรับ "${t.name}" ประมาณ <strong>${t.estimatedCost}</strong> ค่ะ`;return t.costBreakdown&&(e+=`<br><br>รายละเอียด:<br>`+t.costBreakdown.map(e=>`• ${e.item}: ${e.amount}`).join(`<br>`)),{text:e,source:t.sources?.[0],quickReplies:[`ต้องเตรียมเอกสารอะไร?`,`ใช้เวลานานไหม?`]}}return{text:`บอกมาเลยค่ะว่าต้องการทำเรื่องอะไร จะได้แนะนำค่าใช้จ่ายได้ถูกต้อง 😊`,quickReplies:[`ทำใบขับขี่ใหม่`,`ต่ออายุใบขับขี่`,`ทำบัตร รพ. ใหม่`]}}if(r.includes(`จองคิว`)||r.includes(`นัด`)||r.includes(`คิว`)||r.includes(`queue`))return t?.agencyId===`dlt`?{text:`สำหรับกรมการขนส่งทางบก สามารถจองคิวล่วงหน้าผ่านระบบ <strong>DLT Smart Queue</strong> ได้ค่ะ<br><br>📱 จองได้ที่เว็บไซต์หรือแอป DLT Smart Queue<br>⏰ จองล่วงหน้าอย่างน้อย 1 วัน<br>📍 เลือกสาขาที่สะดวก`,source:{title:`DLT Smart Queue`,url:`https://gecc.dlt.go.th/dlt-queue/`},quickReplies:[`ต้องเตรียมเอกสารอะไร?`,`ใช้เวลานานไหม?`]}:{text:`แต่ละหน่วยงานมีระบบจองคิวต่างกันค่ะ บอกมาเลยว่าต้องการจองคิวที่ไหน?`,quickReplies:[`จองคิวขนส่ง`,`จองคิวโรงพยาบาล`]};if(r.includes(`ใบขับขี่`)||r.includes(`ขับขี่`))return{text:`เกี่ยวกับใบขับขี่ มีหลายบริการค่ะ:<br><br>🪪 <strong>ทำใบขับขี่ใหม่</strong> — สำหรับคนที่ยังไม่มี<br>🔄 <strong>ต่ออายุใบขับขี่</strong> — ใกล้หมดหรือหมดแล้ว<br>🔀 <strong>เปลี่ยนชนิด</strong> — เช่น มอเตอร์ไซค์ → รถยนต์<br><br>คุณต้องการทำเรื่องไหนคะ?`,source:{title:`กรมการขนส่งทางบก`,url:`https://www.dlt.go.th`},quickReplies:[`ทำใบขับขี่ใหม่`,`ต่ออายุใบขับขี่`,`เปลี่ยนชนิดใบขับขี่`]};if(r.includes(`โรงพยาบาล`)||r.includes(`หมอ`)||r.includes(`แพทย์`)||r.includes(`รักษา`))return{text:`เกี่ยวกับโรงพยาบาลรัฐ มีหลายบริการค่ะ:<br><br>📝 <strong>ทำบัตรใหม่ / นัดพบแพทย์</strong><br>📄 <strong>ขอใบรับรองแพทย์</strong><br>💳 <strong>เบิกสิทธิ์การรักษา</strong><br>📁 <strong>ขอประวัติการรักษา</strong><br><br>คุณต้องการทำเรื่องไหนคะ?`,source:{title:`สปสช.`,url:`https://www.nhso.go.th`},quickReplies:[`ทำบัตร รพ. ใหม่`,`ขอใบรับรองแพทย์`,`ตรวจสอบสิทธิ์การรักษา`]};if((r.includes(`ขั้นตอน`)||r.includes(`ยังไง`)||r.includes(`อย่างไร`)||r.includes(`วิธี`))&&t){let e=t.steps.map((e,t)=>`${t+1}. ${e}`).join(`<br>`);return{text:`ขั้นตอนสำหรับ "${t.name}" มีดังนี้ค่ะ:<br><br>${e}<br><br>มีข้อสงสัยเพิ่มเติมไหมคะ?`,source:t.sources?.[0],quickReplies:[`ต้องเตรียมเอกสารอะไร?`,`ค่าใช้จ่ายเท่าไหร่?`]}}return(r.includes(`เวลา`)||r.includes(`นานไหม`)||r.includes(`กี่นาที`)||r.includes(`กี่ชั่วโมง`))&&t?{text:`สำหรับ "${t.name}" ใช้เวลาประมาณ <strong>${t.estimatedTime}</strong> ค่ะ<br><br>⏰ เวลาทำการ: ${t.operatingHours}<br>💡 แนะนำให้มาถึงก่อนเวลานัดอย่างน้อย 30 นาที`,source:t.sources?.[0],quickReplies:[`จองคิวยังไง?`,`ต้องเตรียมอะไรบ้าง?`]}:r.includes(`เตรียมพร้อม`)||r.includes(`เรียบร้อย`)||r.includes(`ครบ`)?{text:`เยี่ยมเลยค่ะ! 🎉<br><br>สรุปสิ่งที่ต้องจำ:<br>✅ เตรียมเอกสารครบถ้วน<br>✅ จองคิวล่วงหน้า (ถ้ามีระบบ)<br>✅ ไปถึงก่อนเวลานัด 30 นาที<br>✅ แต่งกายสุภาพ<br><br>ขอให้ทุกอย่างราบรื่นนะคะ! 😊`,quickReplies:[`ขอบคุณ!`,`มีคำถามเพิ่มเติม`]}:r.includes(`ขอบคุณ`)||r.includes(`ขอบใจ`)||r.includes(`thank`)?{text:`ยินดีค่ะ! 😊 หากมีคำถามเพิ่มเติมสามารถถามได้ตลอดเวลาค่ะ<br><br>ขอให้การติดต่อหน่วยงานราชการเป็นไปอย่างราบรื่นนะคะ! 🙏`,quickReplies:[`กลับหน้าแรก`]}:{text:`ขอบคุณสำหรับคำถามค่ะ! 😊<br><br>ตอนนี้ฉันช่วยเตรียมตัวก่อนไปติดต่อ <strong>กรมการขนส่งทางบก</strong> และ <strong>โรงพยาบาลรัฐ</strong> ได้ค่ะ<br><br>ลองบอกมาเลยว่าต้องการทำเรื่องอะไร แล้วฉันจะช่วยแนะนำขั้นตอน เอกสาร และค่าใช้จ่ายให้ค่ะ`,quickReplies:[`อยากทำใบขับขี่ใหม่`,`อยากไปโรงพยาบาล`,`ต้องเตรียมเอกสารอะไร?`]}}function k(){f.currentPage=`saved`,h.innerHTML=`
    <div class="page" id="page-saved">
      <header class="header">
        <div style="width: 36px;"></div>
        <h1 class="header-title">การเตรียมตัว</h1>
        <div style="width: 36px;"></div>
      </header>

      <div class="page-content">
        ${Object.keys(f.checkedItems).some(e=>f.checkedItems[e])?`
          <div style="padding: var(--space-4); background: var(--color-success-light); border-radius: var(--radius-lg); margin-bottom: var(--space-4);">
            <div style="font-size: var(--font-size-md); font-weight: var(--font-weight-semibold); color: var(--color-success); margin-bottom: var(--space-1);">✅ มีรายการที่เตรียมแล้ว</div>
            <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">กดที่บริการด้านล่างเพื่อดูรายละเอียด</div>
          </div>
          <div class="service-list">
            ${A().map(e=>`
              <div class="service-card" data-service="${e.id}">
                <div class="service-card-icon" style="background: var(--color-primary-light); color: var(--color-primary)">${e.icon}</div>
                <div class="service-card-info">
                  <div class="service-card-name">${e.name}</div>
                  <div class="service-card-desc">${e.checkedCount}/${e.totalCount} รายการเตรียมแล้ว</div>
                </div>
                <span class="service-card-arrow">${m.chevron}</span>
              </div>
            `).join(``)}
          </div>
        `:`
          <div class="empty-state">
            <div class="empty-state-icon">📋</div>
            <div class="empty-state-title">ยังไม่มีรายการเตรียมตัว</div>
            <div class="empty-state-desc">เลือกบริการที่ต้องการแล้วเริ่มเช็คลิสต์การเตรียมตัวได้เลย</div>
            <button class="cta-button" style="margin-top: var(--space-5); max-width: 200px;" id="saved-explore">
              เริ่มสำรวจ
            </button>
          </div>
        `}
      </div>

      ${g(`checklist`)}
    </div>
  `,_(),document.getElementById(`saved-explore`)?.addEventListener(`click`,()=>n(`/`)),document.querySelectorAll(`.service-card`).forEach(e=>{e.addEventListener(`click`,()=>n(`/service`,{serviceId:e.dataset.service}))})}function A(){let e={};return Object.keys(f.checkedItems).forEach(t=>{if(!f.checkedItems[t])return;t.split(`-doc-`)[0].split(`-prep-`)[0];let n=t.split(/-doc-|-prep-/)[0];if(!e[n]){let t=u(n);t&&(e[n]={...t,checkedCount:0,totalCount:(t.documents?.length||0)+(t.preparation?.length||0)})}e[n]&&e[n].checkedCount++}),Object.values(e)}function j(){f.currentPage=`profile`,h.innerHTML=`
    <div class="page" id="page-profile">
      <header class="header">
        <div style="width: 36px;"></div>
        <h1 class="header-title">โปรไฟล์</h1>
        <div style="width: 36px;"></div>
      </header>

      <div class="page-content">
        <div style="text-align: center; padding: var(--space-8) 0;">
          <div style="width: 80px; height: 80px; background: var(--color-primary-light); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-4); font-size: 36px;">
            👤
          </div>
          <div style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-1);">ผู้ใช้ทั่วไป</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">GovBuddy AI Prototype</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <div class="service-card" style="cursor: default;">
            <div class="service-card-icon" style="background: var(--color-primary-light); color: var(--color-primary);">📋</div>
            <div class="service-card-info">
              <div class="service-card-name">รายการเตรียมตัว</div>
              <div class="service-card-desc">${Object.keys(f.checkedItems).filter(e=>f.checkedItems[e]).length} รายการที่เช็คแล้ว</div>
            </div>
          </div>
          <div class="service-card" id="clear-data" style="cursor: pointer;">
            <div class="service-card-icon" style="background: var(--color-danger-light); color: var(--color-danger);">🗑️</div>
            <div class="service-card-info">
              <div class="service-card-name" style="color: var(--color-danger);">ล้างข้อมูลทั้งหมด</div>
              <div class="service-card-desc">ลบรายการเช็คลิสต์ทั้งหมด</div>
            </div>
          </div>
        </div>

        <div style="margin-top: var(--space-8); text-align: center;">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">
            GovBuddy AI v1.0 Prototype<br>
            CDG Hackathon 2026
          </div>
        </div>
      </div>

      ${g(`profile`)}
    </div>
  `,_(),document.getElementById(`clear-data`)?.addEventListener(`click`,()=>{confirm(`ต้องการล้างข้อมูลทั้งหมดหรือไม่?`)&&(f.checkedItems={},p(),j())})}t(`/`,v),t(`/agency`,y),t(`/service`,T),t(`/chat`,D),t(`/saved`,k),t(`/profile`,j),i();