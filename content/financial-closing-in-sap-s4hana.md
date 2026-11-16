---
title: 'Financial closing in SAP S4/HANA'
contentType: reference
---

There are different types of closing. This is just one of them.

# Period-end financial closing process

There are different period-end financial closing process:

* Asset Accounting closing
  * Run depreciation
  * Check asset values
* Materials Management closing
  * Analyze and clear GR/IR
  * Perform balance-sheet valuation of materials
* Receivables and Payables closing
  * Balance confirmations
  * Foreign currency valuation
  * Value adjustments / impairments
  * Regrouping receivables and payables by maturity
* Accruals and deferrals
  * Manual accruals/deferrals
  * Accruals Management
  * Purchase Order Accruals
* Reconciliations and controls
  * Intercompany matching and reconciliation
  * Balance audit trail / closing reports
  * Other consistency and completeness checks
* Technical period/year-end activities
  * Open/close posting periods
  * Balance carryforward at year-end
  * Other technical closing steps
* Financial statements and reporting
  * Produce and review Balance Sheet and P&L
  * Execute closing reports

## Receivables and Payables closing

### Balance confirmation

**Balance confirmation** is the process of verifying that a balance recorded in a book agrees with what the counterpart says it is owed.

### Foreign currency valuation

**Foreign currency valuation** is the process of remeasuring open items (e.g. AR, AP) and G/L account balances denominated in foreign currencies using the exchange rate of the reporting key date.

### Value adjustments

In the context of financiantial closing, **value adjuntment** is the process of updating the actual value of an asset or receivable to its real or expected current value.

## Accruals and deferrals

Accrual (in Spanish, *periodificación*) implies putting a cost into the period in which it economically belongs, rather than simply using the date on which the invoice happens to arrive.

Accrual in S/4HANA is managed in the module Accruals Management (FI-AM), through its Accrual Engine.

Types of accrual:

* Financial accrual
* Purchase accrual

A **purchase accrual** is necessary when the economic reality and the invoice timing do not match. For example, a service maybe received in a given month (and so should be reflected in accounting) but the invoice arrives two months later.

A good receipts (GR) in S/4HANA may be valuated or non-valuated:

- **Non-valuated GR**: it registers operational/logistics data, but not accounting/financial data. The latter is done when the invoice receipt (IR) arrives.
- **Valuated GR**: it can be registered at once in the operational/logistic modules and accounting/financial data.

Expense/service purchases are non-valuated GRs. Stock/warehousematerials are valuated. Fixed assets are any of them depending on configuration.

Accruals are only necessary for non-valuated GRs. Valuated GRs do not require accruals, as the accounting impact is registered immediately.

### Accrual Object

In the context of SAP S/4HANA, an **accrual object** (in Spanish, *objeto de periodificación*) is an object used in SAP Accrual Management to managed the accrual aspects of purchase orders (POs).

An accrual object has many accrual items assigned.

To create an accrual object, go to Fiori > "Create accrual object".

## Technical period/year-end activities

### Balance carryfoward

**Balance carryforward** (in Spanish, *arrastre de saldos*) implies moving the to the new balance.

### Opening and closing of financial periods

You can open, close and reopen periods by set of accounts.

The most standard SAP period configuration has 12 standard periods (1-12) plus 4 special periods (13-16).

An special period only allows postings on the last day of the planning period.

Transaction OB52 is used to open and close periods.

# Financial closing cockpit

A **financial closing cockpit** is a set of functionalities that eases organizational closing process tasks, such as monitorization and coordination.

Finance closing cockpit solutions in S/4HANA:

* FCC
* AFC

FCC is less advanced than AFC, but it is probably cheaper and it is probably enough when there is a single S/4HANA system.

## FCC

**Financial Closing Cockpit** (**FCC**) is the basic closing cockpit solution bundled with S/4HANA.

You can read this post about [SAP Financial Closing Cockpit (FCC)](https://runmodule.com/2028/04/27/sap-financial-closing-cockpit/).

## AFC

**SAP S/4HANA Cloud for Advanced Financial Closing** (**AFC**) is an advanced SAP cloud-native closing solution.

It is part of SAP BTP, though its name include S/4HANA. The reason for this inclusion on its title is that it is tighly coupled with it.

# Learning

* SAP course [S4F15](https://training.sap.com/course/s4f15-sap-financial-closing-in-sap-s-4hana-classroom-026-es-en) "Financial Closing in SAP S/4HANA"
