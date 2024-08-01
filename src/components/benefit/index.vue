<template>
    <BenefitItem imgSrc="/benefit_1.png" title="Leading the trend"
        :titleClasses="{ 'text-3xl': true, 'text-green-500': true }"
        description="You can learn, work and create products that using newest technologies" />
    <BenefitItem imgSrc="/benefit_2.png" title="Caring attentiveness"
        :titleClasses="{ 'text-3xl': true, 'text-red-500': true }"
        description="We always be available when you need some help" />
    <BenefitItem imgSrc="/benefit_3.png" title="Dynamic environment"
        :titleClasses="{ 'text-3xl': true, 'text-yellow-500': true }"
        description="Working with young people, easy to connect and communicate with us" />
</template>
