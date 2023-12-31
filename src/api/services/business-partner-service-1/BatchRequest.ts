/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  AddressEmailAddress,
  AddressFaxNumber,
  AddressHomePageUrl,
  AddressPhoneNumber,
  BpContactToAddress,
  BpContactToFuncAndDept,
  BuPaAddressUsage,
  BuPaIdentification,
  BuPaIndustry,
  BusinessPartner,
  BusinessPartnerAddress,
  BusinessPartnerBank,
  BusinessPartnerContact,
  BusinessPartnerRole,
  BusinessPartnerTaxNumber,
  Customer,
  CustomerCompany,
  CustomerCompanyText,
  CustomerDunning,
  CustomerSalesArea,
  CustomerSalesAreaTax,
  CustomerSalesAreaText,
  CustomerTaxGrouping,
  CustomerText,
  CustomerUnloadingPoint,
  CustomerWithHoldingTax,
  CustSalesPartnerFunc,
  Supplier,
  SupplierCompany,
  SupplierCompanyText,
  SupplierDunning,
  SupplierPartnerFunc,
  SupplierPurchasingOrg,
  SupplierPurchasingOrgText,
  SupplierText,
  SupplierWithHoldingTax
} from './index';

/**
 * Batch builder for operations supported on the Business Partner Service 1.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadBusinessPartnerService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadBusinessPartnerService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadBusinessPartnerService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadBusinessPartnerService1RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadBusinessPartnerService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultBusinessPartnerService1Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Business Partner Service 1.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteBusinessPartnerService1RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteBusinessPartnerService1RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteBusinessPartnerService1RequestBuilder<DeSerializersT>
    | Array<WriteBusinessPartnerService1RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteBusinessPartnerService1RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultBusinessPartnerService1Path =
  '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
export type ReadBusinessPartnerService1RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<AddressEmailAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AddressFaxNumber<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AddressHomePageUrl<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AddressPhoneNumber<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BpContactToAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BpContactToFuncAndDept<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BuPaAddressUsage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BuPaIdentification<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BuPaIndustry<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartnerAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartnerContact<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartnerRole<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      BusinessPartnerTaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerCompany<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerCompanyText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerDunning<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerSalesArea<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerSalesAreaTax<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerSalesAreaText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerTaxGrouping<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerUnloadingPoint<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerWithHoldingTax<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SupplierCompanyText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SupplierDunning<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SupplierPartnerFunc<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SupplierPurchasingOrgText<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SupplierText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SupplierWithHoldingTax<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AddressEmailAddress<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AddressFaxNumber<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AddressHomePageUrl<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AddressPhoneNumber<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BpContactToAddress<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BpContactToFuncAndDept<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BuPaAddressUsage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BuPaIdentification<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BuPaIndustry<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BusinessPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BusinessPartnerContact<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BusinessPartnerRole<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BusinessPartnerTaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomerCompany<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomerCompanyText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomerDunning<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomerSalesArea<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomerSalesAreaTax<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CustomerSalesAreaText<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<CustomerTaxGrouping<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomerText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CustomerUnloadingPoint<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      CustomerWithHoldingTax<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SupplierCompanyText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SupplierDunning<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SupplierPartnerFunc<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SupplierPurchasingOrgText<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SupplierText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SupplierWithHoldingTax<DeSerializersT>,
      DeSerializersT
    >;
export type WriteBusinessPartnerService1RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<AddressEmailAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressEmailAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressEmailAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AddressFaxNumber<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressFaxNumber<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressFaxNumber<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AddressHomePageUrl<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressHomePageUrl<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressHomePageUrl<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AddressPhoneNumber<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressPhoneNumber<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressPhoneNumber<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BpContactToAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BpContactToAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BpContactToAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BpContactToFuncAndDept<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BpContactToFuncAndDept<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BpContactToFuncAndDept<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BuPaAddressUsage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BuPaAddressUsage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BuPaAddressUsage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BuPaIdentification<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BuPaIdentification<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BuPaIdentification<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BuPaIndustry<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BuPaIndustry<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BuPaIndustry<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartnerAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartnerAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartnerAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartnerContact<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartnerContact<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartnerContact<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartnerRole<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartnerRole<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartnerRole<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      BusinessPartnerTaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessPartnerTaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessPartnerTaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerCompany<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerCompany<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerCompany<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerCompanyText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerCompanyText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerCompanyText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerDunning<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerDunning<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerDunning<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerSalesArea<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerSalesArea<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerSalesArea<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerSalesAreaTax<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerSalesAreaTax<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerSalesAreaTax<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerSalesAreaText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerSalesAreaText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerSalesAreaText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerTaxGrouping<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerTaxGrouping<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerTaxGrouping<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerUnloadingPoint<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerUnloadingPoint<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerUnloadingPoint<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerWithHoldingTax<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerWithHoldingTax<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerWithHoldingTax<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SupplierCompanyText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierCompanyText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierCompanyText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SupplierDunning<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierDunning<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierDunning<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SupplierPartnerFunc<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierPartnerFunc<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierPartnerFunc<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SupplierPurchasingOrgText<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SupplierPurchasingOrgText<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SupplierPurchasingOrgText<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SupplierText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SupplierWithHoldingTax<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierWithHoldingTax<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<
      SupplierWithHoldingTax<DeSerializersT>,
      DeSerializersT
    >;
