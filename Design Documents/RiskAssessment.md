# ⚠️ Risk Assessment – Group 33  
**Project:** Rebuilding of TypeScript Webpage to a Modern Modular System  
**Module:** COMP2003 – Rebuilding TypeScript  
**Client:** ENIDIA – Tyler Cheng  
**Team:** Group 33  
**Date:** 12 November 2025  

---

## 🎯 Purpose  
This document identifies potential project risks, evaluates their likelihood and impact, and outlines mitigation strategies to reduce their effect on project delivery.  

---

## 🧩 Risk Table

| ID | Risk Description | Likelihood | Impact | Mitigation / Response |
|----|------------------|-------------|---------|------------------------|
| R1 | **Team communication delays** – missed updates or unclear task ownership between members. | Medium | High | Hold weekly meetings (Fridays 14:00 GMT), keep Trello updated, and use Teams chat for urgent issues. |
| R2 | **Loss or corruption of files** – accidental overwriting or local data loss. | Low | High | Use GitHub Classroom repo for all changes, enable version control, and commit frequently. |
| R3 | **Outdated dependencies** – legacy libraries (React 17 / Next 12 / Tailwind 3.0) cause build or security issues. | Medium | Medium | Plan upgrade path to React 18 / Next 13; test updates in a branch before merging. |
| R4 | **Time management issues** – difficulty meeting deadlines during assessment periods. | High | High | Follow sprint schedule; prioritise critical deliverables; log daily work. |
| R5 | **Team member absence** – illness or other commitments delay tasks. | Medium | High | Cross-train team members; maintain documentation so others can step in. |
| R6 | **Merge or version conflicts in GitHub** – simultaneous edits to design docs or code. | Medium | Medium | Use feature branches; review and approve pull requests before merging. |
| R7 | **Security vulnerabilities** – exposed API keys or insecure endpoints. | Low | High | Store secrets in `.env`; run code reviews; follow secure coding practices. |
| R8 | **Scope creep** – new feature requests expand workload beyond timeframe. | Medium | High | Use Trello for task approvals; any scope changes must be discussed with client and tutor. |
| R9 | **Inconsistent design between members** – differing styles or naming conventions. | Medium | Medium | Define component naming and Tailwind conventions; use ESLint and Prettier. |
| R10 | **Hosting or deployment failure** – issues when deploying to Vercel / AWS. | Low | Medium | Test early deployments; document environment variables and build steps. |

---

## ✅ Risk Monitoring Process
- Risks are reviewed **at the end of each sprint** during retrospective meetings.  
- New risks are logged in Trello under the **“Risk & Quality”** label.  
- Any critical issues are reported immediately to the tutor and client.

---

## 🧠 Summary
Current project risk level: **Low → Moderate**.  
Most risks are procedural or technical and are mitigated through structured Agile management, Git version control, and regular communication.  

---

📁 **File Location:** `/Design Documents/RiskAssessment.md`
