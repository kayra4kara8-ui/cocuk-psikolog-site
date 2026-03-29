'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const services = [
  { id: 'cocuk-terapi', icon: '🧸', title: 'Çocuk Terapisi', desc: '4–12 yaş', duration: '50 dk' },
  { id: 'ergen-terapi', icon: '🧑‍🦱', title: 'Ergen Terapisi', desc: '13–18 yaş', duration: '50 dk' },
  { id: 'ebeveyn', icon: '👨‍👩‍👧', title: 'Ebeveyn Danışmanlığı', desc: 'Her yaş', duration: '60 dk' },
  { id: 'degerlendirme', icon: '📊', title: 'Psikolojik Değerlendirme', desc: '4–18 yaş', duration: '90 dk' },
  { id: 'online', icon: '💻', title: 'Online Terapi', desc: 'Her yaş', duration: '50 dk' },
  { id: 'ilk-gorusme', icon: '💬', title: 'Ücretsiz Ön Görüşme', desc: 'Bilgi amaçlı', duration: '20 dk' },
]

// Generate next 14 days
function getAvailableDays() {
  const days = []
  const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
  const monthNames = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']

  for (let i = 1; i <= 14; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    const dayOfWeek = date.getDay()
    if (dayOfWeek !== 0) { // Skip Sundays
      days.push({
        date: date.toISOString().split('T')[0],
        dayName: dayNames[dayOfWeek],
        dayNum: date.getDate(),
        month: monthNames[date.getMonth()],
        available: Math.random() > 0.2, // 80% chance of availability
      })
    }
  }
  return days
}

// Generate time slots
function getTimeSlots(date) {
  const allSlots = ['10:00', '10:50', '11:40', '13:00', '13:50', '14:40', '15:30', '16:20', '17:10', '18:00', '18:50']
  return allSlots.map(time => ({
    time,
    available: Math.random() > 0.35,
  }))
}

const availableDays = getAvailableDays()

const steps = ['Hizmet', 'Tarih & Saat', 'Bilgiler', 'Onay']

export default function RandevuPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)
  const [timeSlots, setTimeSlots] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', childAge: '', childGender: '', problem: '', notes: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function selectDay(day) {
    setSelectedDay(day)
    setSelectedTime(null)
    setTimeSlots(getTimeSlots(day.date))
  }

  function handleNext() {
    if (step < 4) setStep(step + 1)
  }

  function handleBack() {
    if (step > 1) setStep(step - 1)
  }

  function handleFormChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit() {
    setLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    setLoading(false)
    setSubmitted(true)
  }

  function canProceed() {
    if (step === 1) return !!selectedService
    if (step === 2) return !!selectedDay && !!selectedTime
    if (step === 3) return form.name && form.phone && form.childAge && form.problem.length > 10
    return true
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-16 min-h-screen bg-gradient-to-br from-sage-50 to-warm-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-sage-100">
              <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="font-serif text-3xl text-stone-800 mb-3">Randevunuz Alındı!</h2>
              <p className="text-stone-500 mb-6 leading-relaxed">
                <strong>{form.name}</strong>, randevu talebinizi aldık. 
                En kısa sürede <strong>{form.phone}</strong> numaranızı arayarak randevunuzu onaylayacağız.
              </p>
              <div className="bg-sage-50 rounded-2xl p-5 text-left space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Hizmet</span>
                  <span className="font-medium text-stone-800">{selectedService?.title}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Tarih</span>
                  <span className="font-medium text-stone-800">{selectedDay?.dayNum} {selectedDay?.month} – {selectedTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Kişi</span>
                  <span className="font-medium text-stone-800">{form.name}</span>
                </div>
              </div>
              <p className="text-xs text-stone-400 mb-6">🔒 Bilgileriniz gizlidir ve üçüncü kişilerle paylaşılmaz.</p>
              <a href="/" className="btn-primary w-full justify-center">
                Ana Sayfaya Dön
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gradient-to-br from-sage-50 to-warm-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl font-light text-stone-800 mb-2">Randevu Oluştur</h1>
            <p className="text-stone-500">🔒 Bilgileriniz gizlidir · Yargısız bir ortam · Çocuğunuz güvende</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-10 gap-0">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    i + 1 < step ? 'bg-sage-500 text-white' :
                    i + 1 === step ? 'bg-sage-600 text-white shadow-lg ring-4 ring-sage-100' :
                    'bg-white text-stone-400 border border-stone-200'
                  }`}>
                    {i + 1 < step ? '✓' : i + 1}
                  </div>
                  <div className={`text-xs mt-1.5 font-medium ${i + 1 === step ? 'text-sage-700' : 'text-stone-400'}`}>{s}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-px w-12 sm:w-20 mb-5 transition-all ${i + 1 < step ? 'bg-sage-400' : 'bg-stone-200'}`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-100">

            {/* STEP 1: Service */}
            {step === 1 && (
              <div>
                <h2 className="font-serif text-2xl text-stone-800 mb-2">Hangi hizmeti almak istersiniz?</h2>
                <p className="text-stone-500 text-sm mb-6">İlk görüşmede birlikte en uygun hizmeti de belirleyebiliriz.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map(service => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        selectedService?.id === service.id
                          ? 'border-sage-500 bg-sage-50'
                          : 'border-stone-100 hover:border-sage-200 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-stone-800 text-sm">{service.title}</div>
                          <div className="text-xs text-stone-500 mt-0.5">{service.desc} · {service.duration}</div>
                        </div>
                        {selectedService?.id === service.id && (
                          <div className="w-5 h-5 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Date & Time */}
            {step === 2 && (
              <div>
                <h2 className="font-serif text-2xl text-stone-800 mb-2">Tarih ve saat seçin</h2>
                <p className="text-stone-500 text-sm mb-6">Müsait gün ve saati seçin.</p>

                {/* Date selection */}
                <div className="mb-6">
                  <div className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Tarih Seçin</div>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {availableDays.map((day, i) => (
                      <button
                        key={i}
                        onClick={() => day.available && selectDay(day)}
                        disabled={!day.available}
                        className={`p-2 rounded-xl text-center transition-all ${
                          selectedDay?.date === day.date
                            ? 'bg-sage-600 text-white shadow-md'
                            : day.available
                            ? 'bg-stone-50 hover:bg-sage-50 hover:border-sage-200 border border-stone-100 text-stone-700'
                            : 'bg-stone-50 text-stone-300 cursor-not-allowed border border-stone-100'
                        }`}
                      >
                        <div className="text-xs">{day.dayName}</div>
                        <div className="text-lg font-serif font-light">{day.dayNum}</div>
                        <div className="text-xs">{day.month}</div>
                        {!day.available && <div className="text-xs mt-0.5 opacity-60">Dolu</div>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time selection */}
                {selectedDay && (
                  <div>
                    <div className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Saat Seçin</div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot, i) => (
                        <button
                          key={i}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                            selectedTime === slot.time
                              ? 'bg-sage-600 text-white shadow-md'
                              : slot.available
                              ? 'bg-stone-50 hover:bg-sage-50 border border-stone-100 text-stone-700'
                              : 'bg-stone-50 text-stone-300 cursor-not-allowed border border-stone-100 line-through'
                          }`}
                        >
                          {slot.time}
                          {!slot.available && <span className="block text-xs font-normal">Dolu</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDay && selectedTime && (
                  <div className="mt-6 bg-sage-50 rounded-2xl p-4 text-sm text-sage-700">
                    ✓ Seçiminiz: <strong>{selectedDay.dayNum} {selectedDay.month} {selectedDay.dayName}</strong> günü saat <strong>{selectedTime}</strong>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: Form */}
            {step === 3 && (
              <div>
                <h2 className="font-serif text-2xl text-stone-800 mb-2">Bilgilerinizi girin</h2>
                <p className="text-stone-500 text-sm mb-6">🔒 Tüm bilgileriniz gizlidir. Yargısız bir ortamdasınız.</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Ad Soyad *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        placeholder="Ayşe Yılmaz"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Telefon *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="0555 123 45 67"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Çocuğun Yaşı *</label>
                      <select
                        name="childAge"
                        value={form.childAge}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all bg-white"
                      >
                        <option value="">Yaş seçin</option>
                        {Array.from({ length: 15 }, (_, i) => i + 4).map(age => (
                          <option key={age} value={age}>{age} yaş</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Çocuğun Cinsiyeti</label>
                      <select
                        name="childGender"
                        value={form.childGender}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all bg-white"
                      >
                        <option value="">Seçin</option>
                        <option value="kız">Kız</option>
                        <option value="erkek">Erkek</option>
                        <option value="belirtmek-istemiyorum">Belirtmek istemiyorum</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Neden başvuruyorsunuz? *
                      <span className="text-stone-400 font-normal ml-1">(Ne kadar detay verirseniz o kadar iyi hazırlanırız)</span>
                    </label>
                    <textarea
                      name="problem"
                      value={form.problem}
                      onChange={handleFormChange}
                      rows={4}
                      placeholder="Çocuğunuzda fark ettiğiniz değişiklikleri, endişelerinizi veya neden destek almak istediğinizi kısaca paylaşabilirsiniz..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Ek Notlar <span className="text-stone-400 font-normal">(İsteğe bağlı)</span></label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleFormChange}
                      rows={2}
                      placeholder="Önceki tanı, ilaç kullanımı veya belirtmek istediğiniz başka bir şey..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="mt-5 p-4 bg-sage-50 rounded-2xl text-sm text-sage-700 border border-sage-100">
                  🔒 Bilgileriniz gizlidir ve üçüncü kişilerle paylaşılmaz. Yargısız bir ortamda değerlendirilir.
                </div>
              </div>
            )}

            {/* STEP 4: Confirmation */}
            {step === 4 && (
              <div>
                <h2 className="font-serif text-2xl text-stone-800 mb-2">Randevunuzu onaylayın</h2>
                <p className="text-stone-500 text-sm mb-6">Her şey doğru mu? Onaylayın, randevunuzu kaydedelim.</p>

                <div className="space-y-4">
                  <div className="bg-stone-50 rounded-2xl p-5 space-y-3">
                    <div className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Randevu Özeti</div>
                    {[
                      { label: 'Hizmet', value: `${selectedService?.icon} ${selectedService?.title}` },
                      { label: 'Tarih', value: `${selectedDay?.dayNum} ${selectedDay?.month} ${selectedDay?.dayName}` },
                      { label: 'Saat', value: selectedTime },
                      { label: 'Süre', value: selectedService?.duration },
                      { label: 'Kişi', value: form.name },
                      { label: 'Telefon', value: form.phone },
                      { label: 'Çocuk yaşı', value: `${form.childAge} yaş${form.childGender ? ` · ${form.childGender}` : ''}` },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-stone-500">{item.label}</span>
                        <span className="font-medium text-stone-800">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {form.problem && (
                    <div className="bg-stone-50 rounded-2xl p-5">
                      <div className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Başvuru Nedeni</div>
                      <p className="text-sm text-stone-600 leading-relaxed">{form.problem}</p>
                    </div>
                  )}

                  <div className="bg-sage-50 rounded-2xl p-4 text-sm text-sage-700 border border-sage-100">
                    ✅ Randevunuzu aldıktan sonra <strong>{form.phone}</strong> numaranızı arayarak onay yapacağız.
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
              <button
                onClick={handleBack}
                className={`flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 transition-colors ${step === 1 ? 'invisible' : ''}`}
              >
                ← Geri
              </button>

              {step < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`btn-primary ${!canProceed() ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-md' : ''}`}
                >
                  Devam Et →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn-primary min-w-[160px] justify-center"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : '✅ Randevuyu Onayla'}
                </button>
              )}
            </div>
          </div>

          {/* Bottom trust */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-400">
            <span>🔒 Bilgileriniz gizlidir</span>
            <span>💚 Yargısız ortam</span>
            <span>🛡️ Çocuğunuz güvende</span>
            <span>📞 24 saat içinde dönüş</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
