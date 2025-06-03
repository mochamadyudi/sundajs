# SundaJS

---
## Description

**SundaJS** mangrupakeun framework backend anu dumasar kana Node.js jeung TypeScript. Ieu framework nyadiakeun arsitektur aplikasi anu testable, scalable, loosely coupled, jeung gampang di-maintain, kalayan sentuhan istilah lokal Sunda.

SundaJS ngagunakeun pendekatan **Object-Oriented Programming (OOP)** jeung **Functional Programming (FP)**, sarta diwangun ngagunakeun dekorator jeung modularitas.

---
## Installation

To start using SundaJS, you can install the core package:

```bash
npm install @sundajs reflect-metadata
```
pastikeun ```tsconfig.json``` anjeun di setel kieu:
```json
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
```

---

Contoh Pamakean
---

```ts
import { Pangatur, Candak, Kirim } from '@sundajs/core';

@Pangatur('/api/v1/user')
export class UserController {
  @Candak('/')
  candakSadayana(){
    return "User Sadayana";
  }
  
  @Kirim('/')
  tambahUser(){
    return "Nambahkeun user na";
  }
}
```