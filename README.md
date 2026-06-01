# 듀얼 모멘텀 대시보드

한국-미국 6개월 듀얼 모멘텀 전략의 매월 리밸런싱 판단을 자동화한 대시보드입니다.

## 전략 규칙

1. KOSPI vs S&P500 **6개월 수익률** 비교
2. 더 높은 쪽 ETF를 **100% 보유**
3. 둘 다 마이너스 → **미국 채권 ETF** 보유
4. 채권도 마이너스 → **현금(MMF)** 대기

## 사용 방법

매월 말 이 페이지를 열고 상단 배너 색깔 확인:
- 🟢 초록 → 한국 주식 (KODEX 200 / TIGER 200)
- 🟣 보라 → 미국 주식 (TIGER/KODEX 미국S&P500)
- 🟡 주황 → 미국 채권 (KODEX/TIGER 미국채10년)
- 🔴 빨강 → 현금 대기 (MMF / CMA)

## 기술 스택

- 순수 HTML/CSS/JS (프레임워크 없음)
- 데이터: [easyinvesting.app](https://easyinvesting.app) API
- Vercel rewrite로 CORS 우회

## 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

또는 GitHub 연동 후 Vercel 대시보드에서 자동 배포.

## 파일 구조

```
.
├── index.html      # 메인 페이지
├── vercel.json     # Vercel 설정 (API 프록시)
└── .gitignore
```

## 면책 조항

이 대시보드는 투자 참고용이며, 투자 결과에 대한 책임은 본인에게 있습니다.
