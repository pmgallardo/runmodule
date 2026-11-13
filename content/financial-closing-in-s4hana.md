---
title: Financial closing in SAP S/4HANA
contentType: reference
---

Tasks to be completed during financial closing in SAP S/4HANA:

- Period opening
- Valuations

# Valuations

There are different types of valuation:

- Foreign currency valuation
- Open items valuation

Valuation areas (*áreas de valoración*) can be used to make adjustments about valuation.

Valuation are often simulation just to assess the impact of a given scenario.

## Foreign currency valuation

Foreign currency valuation is done

- Line item
- Balance

In line item (in Spanish, *partidas individuales*) are done daily by default. It posts the valuation for each day, and then cancels the current valuation at the beginning of the following day.

In balance (in Spanish, *saldos*), there is a single post for the whole month that is not canceled. Each month just posts the difference compared to the previous month.

## Open items valuation

Open items (in Spanish, *partidas abiertas*) must be valuated.

# SAP financial closing solutions

Apart from the solutions included in the basic S/4HANA package, there are some addiitonal solutions:

- FCC
- AFC

## FCC

You can read this post about [SAP Financial Closing Cockpit](https://runmodule.com/2028/04/27/sap-financial-closing-cockpit/) (FCC).

## SAP S/4HANA AFC

**SAP S/4HANA Cloud for Advanced Financial Closing** (**AFC**) is a SAP cloud-native solution.

It is part of SAP BTP.

# Learning

[Course S4F15 "SAP Financial Closing in SAP S/4HANA"](https://training.sap.com/course/s4f15-sap-financial-closing-in-sap-s4hana-classroom-026-g-en/?)
