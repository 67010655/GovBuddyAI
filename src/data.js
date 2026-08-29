// ============================================
// GovBuddy AI — Agency & Service Data
// Prototype: กรมการขนส่งทางบก + โรงพยาบาลรัฐ
// ============================================

export const categories = [
  { id: 'transport', name: 'การขนส่ง', icon: '🚗', color: 'var(--color-cat-transport)', enabled: true },
  { id: 'health', name: 'สาธารณสุข', icon: '🏥', color: 'var(--color-cat-health)', enabled: true },
  { id: 'finance', name: 'การเงิน', icon: '💰', color: 'var(--color-cat-finance)', enabled: false },
  { id: 'welfare', name: 'สวัสดิการ', icon: '🤝', color: 'var(--color-cat-welfare)', enabled: false },
  { id: 'education', name: 'การศึกษา', icon: '📚', color: 'var(--color-cat-education)', enabled: false },
  { id: 'document', name: 'รับรองเอกสาร', icon: '📋', color: 'var(--color-cat-document)', enabled: false },
  { id: 'patent', name: 'สิทธิบัตร', icon: '📜', color: 'var(--color-cat-patent)', enabled: false },
  { id: 'other', name: 'อื่นๆ', icon: '🔍', color: 'var(--color-cat-other)', enabled: false },
];

export const agencies = [
  {
    id: 'dlt',
    name: 'กรมการขนส่งทางบก',
    shortName: 'ขนส่ง',
    icon: '🚗',
    color: '#2D7FF9',
    bgColor: '#E3EDFF',
    categoryId: 'transport',
    description: 'ใบขับขี่, ทะเบียนรถ, โอนกรรมสิทธิ์',
    hotline: '1584',
    website: 'https://www.dlt.go.th',
    queueSystem: {
      name: 'DLT Smart Queue',
      url: 'https://gecc.dlt.go.th/dlt-queue/',
    },
  },
  {
    id: 'hospital',
    name: 'โรงพยาบาลรัฐ',
    shortName: 'โรงพยาบาล',
    icon: '🏥',
    color: '#10B981',
    bgColor: '#ECFDF5',
    categoryId: 'health',
    description: 'นัดพบแพทย์, ขอใบรับรอง, เบิกสิทธิ์',
    hotline: '1330',
    website: 'https://www.nhso.go.th',
    queueSystem: {
      name: 'ระบบนัดหมายออนไลน์',
      url: null,
    },
  },
];

export const services = {
  dlt: [
    {
      id: 'dlt-new-license',
      agencyId: 'dlt',
      name: 'ทำใบขับขี่ใหม่',
      icon: '🪪',
      description: 'สำหรับผู้ที่ต้องการทำใบอนุญาตขับรถยนต์ส่วนบุคคลชั่วคราว (2 ปี) เป็นครั้งแรก',
      category: 'ใบขับขี่',
      estimatedTime: '45–60 นาที',
      estimatedProcessDays: 'ได้รับภายในวันเดียว',
      estimatedCost: '505 บาท',
      costBreakdown: [
        { item: 'ค่าธรรมเนียมใบขับขี่', amount: '205 บาท' },
        { item: 'ค่าสอบข้อเขียน', amount: '100 บาท' },
        { item: 'ค่าสอบปฏิบัติ', amount: '200 บาท' },
      ],
      location: 'สำนักงานขนส่งจังหวัด/สาขา ทั่วประเทศ',
      locationNote: 'เลือกสาขาใกล้บ้าน หรือจองคิวออนไลน์ล่วงหน้า',
      operatingHours: 'จันทร์–ศุกร์ 08:00–15:30 น.',
      documents: [
        { name: 'บัตรประชาชนตัวจริง', note: 'ยังไม่หมดอายุ', isConditional: false },
        { name: 'ใบรับรองแพทย์', note: 'ออกไม่เกิน 1 เดือน', isConditional: false },
        { name: 'รูปถ่าย 1 นิ้ว จำนวน 2 รูป', note: 'บางสาขาถ่ายที่จุดบริการได้', isConditional: false },
      ],
      preparation: [
        { name: 'จองคิวผ่าน DLT Smart Queue', note: 'จองล่วงหน้าอย่างน้อย 1 วัน', link: 'https://gecc.dlt.go.th/dlt-queue/' },
        { name: 'อบรม e-Learning ล่วงหน้า', note: 'อบรมออนไลน์ 5 ชม. ไม่ต้องมาที่ขนส่ง', link: 'https://www.dlt-elearning.com' },
        { name: 'ตรวจสอบเวลาทำการ', note: 'ตรวจสอบว่าสาขาเปิดให้บริการ' },
      ],
      steps: [
        'จองคิวผ่าน DLT Smart Queue ล่วงหน้า',
        'ยื่นเอกสารที่เคาน์เตอร์',
        'ทดสอบสมรรถภาพร่างกาย (สายตา, สี, ปฏิกิริยา)',
        'อบรมภาคทฤษฎี 5 ชั่วโมง (หรือแสดงหลักฐาน e-Learning)',
        'สอบข้อเขียน 50 ข้อ (ผ่าน 45 ข้อ)',
        'สอบขับรถจริงในสนามสอบ',
        'ถ่ายรูป ชำระค่าธรรมเนียม รับใบขับขี่',
      ],
      tips: [
        'จองคิวผ่าน DLT Smart Queue ล่วงหน้า จะได้ไม่ต้องรอนาน',
        'อบรม e-Learning ออนไลน์ล่วงหน้าได้ ไม่ต้องมาอบรมที่ขนส่ง',
        'มาถึงก่อนเวลานัดอย่างน้อย 30 นาที',
        'แต่งกายสุภาพ ไม่สวมรองเท้าแตะ',
      ],
      officerScripts: [
        'แจ้งที่ช่องประชาสัมพันธ์: "มาทำใบขับขี่รถยนต์ส่วนบุคคลใหม่ จองคิวล่วงหน้าแล้ว"',
        'แจ้งจุดยื่นเอกสาร: "ยื่นบัตรประชาชน ใบรับรองแพทย์ และผลการอบรม e-Learning"',
        'แจ้งจุดสอบปฏิบัติ: "มาสอบขับรถยนต์ท่าถอยเข้าซ้าย และเทียบฟุตบาท"',
      ],
      sources: [
        { title: 'กรมการขนส่งทางบก', url: 'https://www.dlt.go.th' },
        { title: 'DLT Smart Queue', url: 'https://gecc.dlt.go.th/dlt-queue/' },
      ],
      guidedQuestions: [
        {
          id: 'licenseType',
          question: 'คุณต้องการทำใบขับขี่ประเภทไหน?',
          options: ['รถยนต์ส่วนบุคคล', 'รถจักรยานยนต์', 'รถสาธารณะ'],
        },
        {
          id: 'hasTraining',
          question: 'คุณเคยผ่านการอบรมจากโรงเรียนสอนขับรถที่ได้รับการรับรองหรือไม่?',
          options: ['เคย — มีใบรับรอง', 'ยังไม่เคย'],
        },
        {
          id: 'hasAppointment',
          question: 'คุณจองคิวผ่าน DLT Smart Queue แล้วหรือยัง?',
          options: ['จองแล้ว', 'ยังไม่ได้จอง', 'ไม่รู้จักระบบนี้'],
        },
      ],
    },
    {
      id: 'dlt-renew-license',
      agencyId: 'dlt',
      name: 'ต่ออายุใบขับขี่',
      icon: '🔄',
      description: 'ต่ออายุใบอนุญาตขับรถยนต์ส่วนบุคคล จากชั่วคราว (2 ปี) เป็น 5 ปี หรือต่อ 5 ปี เป็น 5 ปี',
      category: 'ใบขับขี่',
      estimatedTime: '30–45 นาที',
      estimatedProcessDays: 'ได้รับภายในวันเดียว',
      estimatedCost: '505 บาท',
      costBreakdown: [
        { item: 'ค่าธรรมเนียมต่ออายุ', amount: '505 บาท' },
      ],
      location: 'สำนักงานขนส่งจังหวัด/สาขา ทั่วประเทศ',
      locationNote: 'ต่ออายุล่วงหน้าได้ 90 วันก่อนหมดอายุ',
      operatingHours: 'จันทร์–ศุกร์ 08:00–15:30 น.',
      documents: [
        { name: 'บัตรประชาชนตัวจริง', note: 'ยังไม่หมดอายุ', isConditional: false },
        { name: 'ใบขับขี่เดิม', note: 'ตัวจริง', isConditional: false },
        { name: 'ใบรับรองแพทย์', note: 'ออกไม่เกิน 1 เดือน', isConditional: false },
      ],
      preparation: [
        { name: 'จองคิวผ่าน DLT Smart Queue', note: 'จองล่วงหน้า', link: 'https://gecc.dlt.go.th/dlt-queue/' },
        { name: 'อบรมออนไลน์ผ่าน DLT e-Learning', note: 'อบรม 1–2 ชม. ตามประเภท', link: 'https://www.dlt-elearning.com' },
      ],
      steps: [
        'จองคิวผ่าน DLT Smart Queue',
        'ยื่นเอกสารที่เคาน์เตอร์',
        'ทดสอบสมรรถภาพร่างกาย',
        'อบรม 1–2 ชั่วโมง (หรือแสดงหลักฐาน e-Learning)',
        'ถ่ายรูป ชำระค่าธรรมเนียม รับใบขับขี่ใหม่',
      ],
      tips: [
        'ต่ออายุล่วงหน้าได้ 90 วันก่อนหมดอายุ ไม่ต้องรอให้หมดก่อน',
        'ถ้าหมดอายุเกิน 1 ปี ต้องสอบข้อเขียนใหม่',
        'ถ้าหมดอายุเกิน 3 ปี ต้องสอบข้อเขียน + สอบขับ',
      ],
      sources: [
        { title: 'กรมการขนส่งทางบก', url: 'https://www.dlt.go.th' },
      ],
      guidedQuestions: [
        {
          id: 'currentLicenseType',
          question: 'ใบขับขี่ปัจจุบันของคุณเป็นประเภทอะไร?',
          options: ['ชั่วคราว (2 ปี) → ต่อเป็น 5 ปี', '5 ปี → ต่อเป็น 5 ปี', 'หมดอายุแล้ว'],
        },
        {
          id: 'expiredDuration',
          question: 'ใบขับขี่หมดอายุมานานเท่าไหร่?',
          options: ['ยังไม่หมดอายุ', 'หมดไม่เกิน 1 ปี', 'หมดเกิน 1 ปี แต่ไม่เกิน 3 ปี', 'หมดเกิน 3 ปี'],
        },
      ],
    },
    {
      id: 'dlt-vehicle-reg',
      agencyId: 'dlt',
      name: 'ต่อทะเบียนรถยนต์',
      icon: '📋',
      description: 'ชำระภาษีรถยนต์ประจำปี และต่อทะเบียนรถยนต์',
      category: 'ทะเบียนรถ',
      estimatedTime: '20–30 นาที',
      estimatedProcessDays: 'ได้รับภายในวันเดียว',
      estimatedCost: 'ตามประเภทรถ + พ.ร.บ.',
      location: 'สำนักงานขนส่ง หรือจุดบริการ เช่น ห้างสรรพสินค้า, ธนาคาร',
      operatingHours: 'จันทร์–ศุกร์ 08:00–15:30 น.',
      documents: [
        { name: 'สมุดคู่มือจดทะเบียนรถ', note: 'ตัวจริง', isConditional: false },
        { name: 'พ.ร.บ. คุ้มครองผู้ประสบภัยจากรถ', note: 'ยังไม่หมดอายุ', isConditional: false },
        { name: 'ใบตรวจสภาพรถ (ตรอ.)', note: 'สำหรับรถอายุเกิน 7 ปี', isConditional: true, condition: 'รถอายุเกิน 7 ปี' },
      ],
      preparation: [
        { name: 'ตรวจสอบว่ารถต้องตรวจสภาพหรือไม่', note: 'รถอายุเกิน 7 ปี ต้องตรวจ ตรอ. ก่อน' },
        { name: 'ซื้อ พ.ร.บ. ล่วงหน้า', note: 'ซื้อผ่านตัวแทนประกันหรือร้านสะดวกซื้อ' },
      ],
      steps: [
        'เตรียมเอกสาร (สมุดทะเบียน + พ.ร.บ.)',
        'ตรวจสภาพรถที่ ตรอ. (ถ้ารถเกิน 7 ปี)',
        'ยื่นเอกสารที่เคาน์เตอร์ หรือทำออนไลน์',
        'ชำระภาษีรถประจำปี',
        'รับป้ายภาษี (สติกเกอร์)',
      ],
      tips: [
        'สามารถชำระภาษีรถออนไลน์ได้ผ่านเว็บ https://eservice.dlt.go.th/',
        'ต่อได้ล่วงหน้า 90 วันก่อนครบกำหนด',
        'ถ้ารถไม่เกิน 7 ปี ไม่ต้องตรวจสภาพ',
      ],
      sources: [
        { title: 'กรมการขนส่งทางบก', url: 'https://www.dlt.go.th' },
      ],
      guidedQuestions: [
        {
          id: 'vehicleAge',
          question: 'รถของคุณจดทะเบียนมากี่ปีแล้ว?',
          options: ['ไม่เกิน 7 ปี', 'เกิน 7 ปี', 'ไม่แน่ใจ'],
        },
        {
          id: 'hasPRB',
          question: 'คุณมี พ.ร.บ. (ประกันภัยภาคบังคับ) ที่ยังไม่หมดอายุหรือไม่?',
          options: ['มี ยังไม่หมดอายุ', 'หมดอายุแล้ว / ยังไม่ได้ต่อ', 'ไม่แน่ใจ'],
        },
      ],
    },
    {
      id: 'dlt-transfer',
      agencyId: 'dlt',
      name: 'โอนกรรมสิทธิ์รถ',
      icon: '🔁',
      description: 'โอนกรรมสิทธิ์รถยนต์จากเจ้าของเดิมเป็นเจ้าของใหม่',
      category: 'ทะเบียนรถ',
      estimatedTime: '1–2 ชั่วโมง',
      estimatedProcessDays: 'ได้รับภายในวันเดียว',
      estimatedCost: 'ประมาณ 400–800 บาท',
      location: 'สำนักงานขนส่งจังหวัดที่จดทะเบียน',
      operatingHours: 'จันทร์–ศุกร์ 08:00–15:30 น.',
      documents: [
        { name: 'สมุดคู่มือจดทะเบียนรถ', note: 'ตัวจริง', isConditional: false },
        { name: 'บัตรประชาชนผู้โอน (เจ้าของเดิม)', note: 'สำเนา + ตัวจริง', isConditional: false },
        { name: 'บัตรประชาชนผู้รับโอน (เจ้าของใหม่)', note: 'สำเนา + ตัวจริง', isConditional: false },
        { name: 'สัญญาซื้อขาย', note: 'พร้อมลายเซ็นทั้ง 2 ฝ่าย', isConditional: false },
        { name: 'หนังสือมอบอำนาจ', note: 'กรณีไม่ได้มาด้วยตนเอง', isConditional: true, condition: 'มอบอำนาจ' },
      ],
      preparation: [
        { name: 'ตกลงราคาและทำสัญญาซื้อขาย', note: 'เตรียมสัญญาให้เรียบร้อย' },
        { name: 'ตรวจสอบว่ารถไม่ติดค้างภาษี', note: 'ชำระภาษีให้เรียบร้อยก่อนโอน' },
      ],
      steps: [
        'ตรวจสอบว่ารถไม่ติดค้างภาษี/ค่าปรับ',
        'เตรียมเอกสารทั้งผู้โอนและผู้รับโอน',
        'ยื่นคำขอโอนกรรมสิทธิ์ที่เคาน์เตอร์',
        'ชำระค่าธรรมเนียมโอน',
        'รับสมุดทะเบียนรถใหม่',
      ],
      tips: [
        'ต้องทำที่สำนักงานขนส่งที่รถจดทะเบียน',
        'ผู้โอนและผู้รับโอนต้องมาด้วยกัน หรือมอบอำนาจ',
        'ตรวจสอบเลขตัวถัง/เลขเครื่องยนต์ให้ตรงกัน',
      ],
      sources: [
        { title: 'กรมการขนส่งทางบก', url: 'https://www.dlt.go.th' },
      ],
      guidedQuestions: [
        {
          id: 'transferRole',
          question: 'คุณเป็นฝ่ายไหนในการโอน?',
          options: ['ผู้โอน (เจ้าของเดิม / ขายรถ)', 'ผู้รับโอน (เจ้าของใหม่ / ซื้อรถ)'],
        },
        {
          id: 'bothPresent',
          question: 'ทั้งผู้โอนและผู้รับโอนจะไปที่ขนส่งด้วยกันได้ไหม?',
          options: ['ไปด้วยกันได้', 'ฝ่ายใดฝ่ายหนึ่งไปไม่ได้ ต้องมอบอำนาจ'],
        },
      ],
    },
    {
      id: 'dlt-change-license',
      agencyId: 'dlt',
      name: 'เปลี่ยนชนิดใบอนุญาตขับรถ',
      icon: '🔀',
      description: 'เปลี่ยนใบอนุญาตจากรถจักรยานยนต์เป็นรถยนต์ หรือเพิ่มชนิด',
      category: 'ใบขับขี่',
      estimatedTime: '1–2 ชั่วโมง',
      estimatedProcessDays: 'ได้รับภายในวันเดียว',
      estimatedCost: '505 บาท',
      location: 'สำนักงานขนส่งจังหวัด/สาขา',
      operatingHours: 'จันทร์–ศุกร์ 08:00–15:30 น.',
      documents: [
        { name: 'บัตรประชาชนตัวจริง', note: '', isConditional: false },
        { name: 'ใบขับขี่เดิม', note: 'ตัวจริง', isConditional: false },
        { name: 'ใบรับรองแพทย์', note: 'ออกไม่เกิน 1 เดือน', isConditional: false },
      ],
      preparation: [
        { name: 'จองคิวผ่าน DLT Smart Queue', note: '' },
      ],
      steps: [
        'จองคิวผ่าน DLT Smart Queue',
        'ยื่นเอกสาร',
        'ทดสอบสมรรถภาพร่างกาย',
        'อบรมภาคทฤษฎี',
        'สอบข้อเขียน',
        'สอบปฏิบัติ (สอบขับ)',
        'ชำระค่าธรรมเนียม รับใบขับขี่ใหม่',
      ],
      tips: [
        'ต้องมีใบขับขี่ประเภทเดิมที่ยังไม่หมดอายุ',
      ],
      sources: [
        { title: 'กรมการขนส่งทางบก', url: 'https://www.dlt.go.th' },
      ],
      guidedQuestions: [
        {
          id: 'changeType',
          question: 'คุณต้องการเปลี่ยนจากใบขับขี่ประเภทไหนเป็นประเภทไหน?',
          options: ['จักรยานยนต์ → รถยนต์', 'รถยนต์ → รถสาธารณะ', 'อื่นๆ'],
        },
      ],
    },
  ],
  hospital: [
    {
      id: 'hospital-new-patient',
      agencyId: 'hospital',
      name: 'ทำบัตรใหม่ / นัดพบแพทย์ครั้งแรก',
      icon: '📝',
      description: 'สำหรับผู้ที่ต้องการเข้ารับบริการโรงพยาบาลรัฐเป็นครั้งแรก',
      category: 'บริการผู้ป่วย',
      estimatedTime: '1–3 ชั่วโมง',
      estimatedProcessDays: 'ขึ้นอยู่กับจำนวนคิว',
      estimatedCost: '0–500 บาท (ตามสิทธิ์)',
      location: 'โรงพยาบาลรัฐทุกแห่ง',
      locationNote: 'ต้องไปโรงพยาบาลตามสิทธิ์ที่ลงทะเบียนไว้ (กรณีบัตรทอง)',
      operatingHours: 'จันทร์–ศุกร์ 07:00–16:00 น. (เปิดรับบัตร 07:00–11:00 น.)',
      documents: [
        { name: 'บัตรประชาชนตัวจริง', note: 'ตัวจริงเท่านั้น', isConditional: false },
        { name: 'บัตรสิทธิ์การรักษา', note: 'บัตรทอง / ประกันสังคม / สิทธิ์ข้าราชการ', isConditional: false },
        { name: 'ใบส่งตัว (Referral)', note: 'กรณีถูกส่งต่อจาก รพ. อื่น', isConditional: true, condition: 'มีใบส่งตัวจากโรงพยาบาลต้นทาง' },
        { name: 'ยาที่รับประทานอยู่', note: 'นำไปให้แพทย์ดูทุกครั้ง', isConditional: false },
      ],
      preparation: [
        { name: 'ตรวจสอบสิทธิ์การรักษา', note: 'โทร สปสช. 1330 หรือตรวจสอบออนไลน์', link: 'https://www.nhso.go.th' },
        { name: 'ตรวจสอบโรงพยาบาลตามสิทธิ์', note: 'กรณีบัตรทอง ต้องไป รพ. ที่ลงทะเบียนไว้' },
        { name: 'โทรสอบถามเวลาเปิดรับบัตร', note: 'แต่ละ รพ. อาจมีเวลาต่างกัน' },
      ],
      steps: [
        'มาถึง รพ. ก่อน 07:00 น. เพื่อรับบัตรคิว',
        'ติดต่อจุด "ทำบัตรใหม่" พร้อมบัตรประชาชน',
        'รอรับบัตร HN (หมายเลขประจำตัวผู้ป่วย)',
        'ไปพบแพทย์ตามแผนกที่นัด',
        'รับยาที่ห้องจ่ายยา',
      ],
      tips: [
        'มาเช้าเพื่อรับบัตรคิว โดยเฉพาะวันจันทร์จะคนเยอะมาก',
        'ตรวจสอบสิทธิ์การรักษาล่วงหน้าผ่าน สปสช. 1330',
        'ถ้าเป็นบัตรทอง ต้องไป รพ. ตามสิทธิ์ที่ลงทะเบียนไว้',
        'นำยาที่รับประทานอยู่ไปด้วยทุกครั้ง',
      ],
      sources: [
        { title: 'สปสช. — สิทธิ์บัตรทอง', url: 'https://www.nhso.go.th' },
        { title: 'สายด่วน สปสช.', url: 'tel:1330' },
      ],
      guidedQuestions: [
        {
          id: 'healthInsurance',
          question: 'คุณมีสิทธิ์การรักษาประเภทใด?',
          options: ['บัตรทอง (30 บาท)', 'ประกันสังคม', 'สิทธิ์ข้าราชการ', 'จ่ายเอง / ไม่มีสิทธิ์', 'ไม่แน่ใจ'],
        },
        {
          id: 'visitPurpose',
          question: 'คุณต้องการไป รพ. เรื่องอะไร?',
          options: ['ตรวจสุขภาพทั่วไป', 'ตรวจรักษาโรคเฉพาะทาง', 'ขอใบรับรองแพทย์', 'ฉีดวัคซีน', 'อื่นๆ'],
        },
        {
          id: 'hasReferral',
          question: 'คุณมีใบส่งตัว (Referral) จาก รพ./คลินิก อื่นหรือไม่?',
          options: ['มีใบส่งตัว', 'ไม่มี'],
        },
      ],
    },
    {
      id: 'hospital-medical-cert',
      agencyId: 'hospital',
      name: 'ขอใบรับรองแพทย์',
      icon: '📄',
      description: 'ขอใบรับรองแพทย์สำหรับทำใบขับขี่ สมัครงาน สมัครเรียน หรืออื่นๆ',
      category: 'เอกสาร',
      estimatedTime: '30 นาที – 2 ชั่วโมง',
      estimatedProcessDays: 'ได้รับภายในวันเดียว',
      estimatedCost: '100–300 บาท',
      location: 'โรงพยาบาลรัฐ หรือคลินิกเอกชน',
      operatingHours: 'จันทร์–ศุกร์ 08:00–16:00 น.',
      documents: [
        { name: 'บัตรประชาชนตัวจริง', note: '', isConditional: false },
        { name: 'รูปถ่าย 1 นิ้ว', note: 'บาง รพ. ถ่ายให้ที่จุดบริการ', isConditional: false },
      ],
      preparation: [
        { name: 'ระบุวัตถุประสงค์ให้ชัดเจน', note: 'แจ้งแพทย์ว่าต้องการใบรับรองเพื่ออะไร' },
      ],
      steps: [
        'ติดต่อจุดทำบัตร/เวชระเบียน',
        'แจ้งว่าต้องการ "ขอใบรับรองแพทย์"',
        'ตรวจร่างกายตามที่แพทย์กำหนด',
        'รอรับใบรับรองแพทย์',
        'ชำระค่าบริการ',
      ],
      tips: [
        'ถ้าขอใบรับรองแพทย์ทำใบขับขี่ แจ้งให้ชัดว่า "เพื่อทำใบขับขี่"',
        'บางคลินิกเอกชนออกใบรับรองได้เร็วกว่า รพ. รัฐ',
        'ใบรับรองแพทย์ส่วนใหญ่มีอายุ 1 เดือน',
      ],
      sources: [
        { title: 'แพทยสภา', url: 'https://www.tmc.or.th' },
      ],
      guidedQuestions: [
        {
          id: 'certPurpose',
          question: 'คุณต้องการใบรับรองแพทย์เพื่อวัตถุประสงค์อะไร?',
          options: ['ทำใบขับขี่', 'สมัครงาน', 'สมัครเรียน', 'ทำประกัน', 'อื่นๆ'],
        },
      ],
    },
    {
      id: 'hospital-claim-rights',
      agencyId: 'hospital',
      name: 'เบิกสิทธิ์การรักษาพยาบาล',
      icon: '💳',
      description: 'ใช้สิทธิ์บัตรทอง / ประกันสังคม / สิทธิ์ข้าราชการ ในการรักษาพยาบาล',
      category: 'สิทธิ์การรักษา',
      estimatedTime: 'แล้วแต่การรักษา',
      estimatedProcessDays: '-',
      estimatedCost: 'ตามสิทธิ์ (ฟรี หรือจ่ายส่วนต่าง)',
      location: 'โรงพยาบาลตามสิทธิ์',
      operatingHours: 'จันทร์–ศุกร์ 08:00–16:00 น.',
      documents: [
        { name: 'บัตรประชาชนตัวจริง', note: '', isConditional: false },
        { name: 'บัตรสิทธิ์การรักษา', note: 'บัตรทอง / บัตรประกันสังคม', isConditional: false },
        { name: 'ใบส่งตัว (กรณีข้ามเขต)', note: 'ถ้าไป รพ. ที่ไม่ใช่ตามสิทธิ์', isConditional: true, condition: 'ไป รพ. นอกเขต' },
      ],
      preparation: [
        { name: 'ตรวจสอบสิทธิ์ก่อน', note: 'โทร สปสช. 1330 หรือเช็กออนไลน์', link: 'https://www.nhso.go.th' },
        { name: 'ตรวจสอบ รพ. ตามสิทธิ์', note: 'บัตรทอง: ต้องไป รพ. ที่ลงทะเบียน | ประกันสังคม: ไป รพ. ที่เลือก' },
      ],
      steps: [
        'ตรวจสอบสิทธิ์ว่ายังใช้ได้',
        'ไปโรงพยาบาลตามสิทธิ์',
        'แจ้งใช้สิทธิ์ที่จุดลงทะเบียน',
        'พบแพทย์ / รับการรักษา',
        'ชำระส่วนต่าง (ถ้ามี)',
      ],
      tips: [
        'บัตรทอง: รักษาฟรี ที่ รพ. ตามสิทธิ์ | ฉุกเฉินไปได้ทุก รพ.',
        'ประกันสังคม: รักษาฟรี ที่ รพ. ที่เลือกตอนขึ้นทะเบียน',
        'สิทธิ์ข้าราชการ: เบิกได้ตามระเบียบ สนร. ที่ รพ. รัฐ',
        'ฉุกเฉิน โทร 1669 ไปได้ทุก รพ. ทุกสิทธิ์',
      ],
      sources: [
        { title: 'สปสช. — ตรวจสอบสิทธิ์', url: 'https://www.nhso.go.th' },
        { title: 'ประกันสังคม', url: 'https://www.sso.go.th' },
      ],
      guidedQuestions: [
        {
          id: 'insuranceType',
          question: 'คุณมีสิทธิ์การรักษาประเภทใด?',
          options: ['บัตรทอง (UC)', 'ประกันสังคม (SSO)', 'สิทธิ์ข้าราชการ (CSMBS)', 'ไม่แน่ใจ'],
        },
        {
          id: 'isEmergency',
          question: 'อาการของคุณเป็นกรณีฉุกเฉินหรือไม่?',
          options: ['ไม่ฉุกเฉิน — นัดหมายปกติ', 'ฉุกเฉิน — ต้องการรักษาทันที'],
        },
      ],
    },
    {
      id: 'hospital-medical-record',
      agencyId: 'hospital',
      name: 'ขอประวัติการรักษา',
      icon: '📁',
      description: 'ขอสำเนาประวัติการรักษา (Medical Record) สำหรับการส่งต่อ หรือใช้ประกอบเอกสาร',
      category: 'เอกสาร',
      estimatedTime: '1–3 วันทำการ',
      estimatedProcessDays: '1–3 วันทำการ',
      estimatedCost: '100–500 บาท',
      location: 'โรงพยาบาลที่เคยรักษา',
      operatingHours: 'จันทร์–ศุกร์ 08:00–16:00 น.',
      documents: [
        { name: 'บัตรประชาชนตัวจริง', note: 'ต้องเป็นเจ้าของข้อมูล', isConditional: false },
        { name: 'หมายเลข HN (ถ้ามี)', note: 'หมายเลขประจำตัวผู้ป่วย', isConditional: false },
        { name: 'หนังสือมอบอำนาจ', note: 'กรณีผู้อื่นมาขอแทน', isConditional: true, condition: 'ไม่ได้มาด้วยตนเอง' },
      ],
      preparation: [
        { name: 'โทรสอบถาม รพ. ล่วงหน้า', note: 'สอบถามขั้นตอนและค่าบริการ' },
        { name: 'เตรียมเลข HN', note: 'ดูจากบัตรนัดหรือใบเสร็จเก่า' },
      ],
      steps: [
        'ติดต่อแผนกเวชระเบียน',
        'ยื่นคำร้องขอประวัติการรักษา',
        'ชำระค่าบริการ',
        'รอรับเอกสาร (1–3 วันทำการ)',
      ],
      tips: [
        'บาง รพ. ส่งข้อมูลผ่านระบบอิเล็กทรอนิกส์ได้ ลองสอบถาม',
        'ข้อมูลประวัติการรักษาเป็นสิทธิ์ของผู้ป่วย สามารถขอได้เสมอ',
      ],
      sources: [
        { title: 'พ.ร.บ. สุขภาพแห่งชาติ', url: 'https://www.nationalhealth.or.th' },
      ],
      guidedQuestions: [
        {
          id: 'recordPurpose',
          question: 'คุณต้องการประวัติการรักษาเพื่ออะไร?',
          options: ['ส่งต่อไป รพ. อื่น', 'ใช้ประกอบเรื่องประกัน', 'เก็บไว้เป็นข้อมูลส่วนตัว', 'อื่นๆ'],
        },
      ],
    },
  ],
};

// Helper to get all services flat
export function getAllServices() {
  return Object.values(services).flat();
}

// Helper to find agency by id
export function getAgencyById(id) {
  return agencies.find(a => a.id === id);
}

// Helper to find service by id
export function getServiceById(id) {
  return getAllServices().find(s => s.id === id);
}

// Helper to get services for an agency
export function getServicesByAgency(agencyId) {
  return services[agencyId] || [];
}

// Helper to search services
export function searchServices(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return getAllServices().filter(s =>
    s.name.includes(q) ||
    s.description.includes(q) ||
    s.category.includes(q)
  );
}

// Helper to search agencies
export function searchAgencies(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return agencies.filter(a =>
    a.name.includes(q) ||
    a.shortName.includes(q) ||
    a.description.includes(q)
  );
}
