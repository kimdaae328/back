const subscriptionService = (() => {

    const submitPayment = async (formData) => {
        try {
            const response = await fetch('/subscription/pay', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const message = await response.text(); // 성공 메시지
                return { ok: true, message };
            } else {
                const message = await response.text(); // 오류 메시지
                return { ok: false, message };
            }

        } catch (error) {
            console.error('결제 요청 실패:', error);
            return { ok: false, message: '서버 오류 발생' };
        }
    };

    return { submitPayment };
})();